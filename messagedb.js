// scenario.js

const fs = require("fs");
const { mainModule } = require("process");
const sqlite3 = require("sqlite3"); //.verbose();
var db;

// sqlite3 interface

function run(sql, ...args) {
/*
  console.log("sql: " + sql);
  console.log("args.length: " + args.length);
  args.forEach( function(item, index) {
      console.log("[" + index + "] " + item);
  });
*/
  if (args.length == 0) {
    return new Promise((resolve, reject) => {
      db.run(sql, (err) => {
        if (err) reject(err);
        resolve();
      });
    });  
  } else if (args.length == 1) {
    return new Promise((resolve, reject) => {
      db.run(sql, args[0], (err) => {
        if (err) reject(err);
        resolve();
      });
    });  
  } else if (args.length == 2) {
    return new Promise((resolve, reject) => {
      db.run(sql, args[0], args[1], (err) => {
        if (err) reject(err);
        resolve();
      });
    });  
  } else if (args.length == 3) {
    return new Promise((resolve, reject) => {
      db.run(sql, args[0], args[1], args[2], (err) => {
        if (err) reject(err);
        resolve();
      });
    });  
  }
}

function all(sql, ...args) {
  /*
  console.log("sql: " + sql);
  console.log("args.length: " + args.length);
  args.forEach( function(item, index) {
      console.log("[" + index + "] " + item);
  });
  */
  if (args.length == 0) {
    return new Promise((resolve, reject) => {
      db.all(sql, (err, row) => {
       if (err) reject(err);
        resolve(row);
      });
    });  
  } else if (args.length == 1) {
    return new Promise((resolve, reject) => {
      db.all(sql, args[0], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });  
  } else if (args.length == 2) {
    return new Promise((resolve, reject) => {
      db.all(sql, args[0], args[1], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });  
  } else if (args.length == 3) {
    return new Promise((resolve, reject) => {
      db.all(sql, args[0], args[1], args[2], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });  
  }
}

function each(sql, func) {
	return new Promise((resolve, reject) => {
		db.each(sql,
      (err, row) => {
        func(err, row);
      }, (err) => {
			  if (err) reject(err);
			  resolve();
		});
	});
}

// raw api

async function init(database)
{
  db = new sqlite3.Database(database);
}

//run("CREATE TABLE Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL UNIQUE, type INTEGER )"); 
//run("INSERT INTO Users (name, type) VALUES (?)", "admin", 0);
//run("INSERT INTO Users (name, type) VALUES (?)", "user0", 0);

async function getUser(user)
{
  var ret = await all("SELECT * FROM Users WHERE name = ?", user);
  if (ret.length != 1) return(-1);
  return(ret[0].id);
}

async function addUser(user, type)
{
  try {
    await run("INSERT INTO Users (name, type) VALUES (?, ?)", user, type);
  } catch (error) {
    return(-1);
  } 
  var ret = await all("SELECT * from Users WHERE name = ?", user);
  return(ret[0].id);
}

async function delUser(user) {
  var ret = await all("SELECT * FROM Users WHERE name = ?", user);
  if (ret.length != 1) return(-1);
  await run("DELETE FROM Users WHERE name = ?", user);
  return(ret[0].id);
}

async function getUsersInfo()
{
  var ret = await all("SELECT * FROM Users");
  if (ret.length == 0) return(null);
  return(ret);
}

/*
async function main()
{
  await init('data/scenario.db');
  var aid = await addUser('user1');
  console.log("user1: add %d", aid);
  var gid = await getUser('user1');
  console.log("user1: get %d", gid);
  await delUser('user1');
  console.log("user1: del");
  var did = await getUser('user1');
  console.log("user1: del %d", did);
}

main();
*/

module.exports.init = init;
module.exports.getUser = getUser;
module.exports.addUser = addUser;
module.exports.delUser = delUser;
module.exports.getUsersInfo = getUsersInfo;

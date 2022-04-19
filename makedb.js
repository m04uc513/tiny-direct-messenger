// makedb.js
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
var db;

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

async function main()
{
  const name = 'data/scenario.db'
  var exists = fs.existsSync(name);
  db = new sqlite3.Database(name);

  if (!exists) {
    await run("CREATE TABLE Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL UNIQUE, type INTEGER )"); 
    await run("INSERT INTO Users (name, type) VALUES (?, ?)", "admin", 0);
    await run("INSERT INTO Users (name, type) VALUES (?, ?)", "user0", 0);
  }
  
  var row = await all("SELECT * from Users");
  if (row) {
    console.log(row);
  }
}

main();

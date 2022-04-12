# 1. プロジェクトの作成

<div style="text-align: right;">
確認　2022/04/08<BR>
初版　2022/02/17<BR>
藤田昭人
</div>

<BR><BR>

express を使って最小限のウェブアプリケーションを作る。

## 1. 概要

以下のコマンドでディレクトリの初期化をした。

```
$ npm init
$ npm install express
$ npm install body-parser
$ 
```

ウェブサーバーとしての挙動は
server.js（Appendix A）
で記述した。

以下のコマンドでサーバーを実行できる。

```
$ node server.js
```

クライアントで実行されるコードは public 下の html ファイルに記述する。
サンプルとして admin.html, login.html, user.html を Appendix B を示す。
中身は Vue.js のための最小限の記述である。

<div style="page-break-before:always"></div>

## A. server.js

```
// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/public/login.html`);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
```

<div style="page-break-before:always"></div>

## B. admin.html, login.html, user.html

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Vue.js Web Application">
<title>login</title>
  <style type="text/css">
  </style>
</head>
<script src="https://cdn.jsdelivr.net/vue/latest/vue.min.js"></script>
<body>
  <div id="app">
    <div id="header">
      <h2>login</h2>
    </div>
    <div id="body"></div>
    <div id="footer"></div>
  </div>
<script>
    var app = new Vue({
      el: '#app'
    });
  </script>
</body>
</html>
```

<div style="page-break-before:always"></div>

## 参考文献

* [Favicon.ico アイコン](https://icon-icons.com/ja/%E6%A4%9C%E7%B4%A2/%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3/?filtro=favicon.ico)


<div style="page-break-before:always"></div>

## ディレクトリー

|名前|解説|
|---|----|
|README.md||
|README-ja.md||
|README-ja.pdf||
|server.js|express を利用したサーバーコード|
|public/admin.html|ダミーページ（管理用）|
|public/login.html|ダミーページ（ログイン）|
|public/user.html|ダミーページ（ユーザー用）|
|public/favicon.ico|ページアイコン|

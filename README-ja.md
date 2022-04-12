# tiny-direct-messenger （第１回）

<div style="text-align: right;">
第１回　2022/04/12<BR>
藤田昭人
</div>

<BR><BR>

本ドキュメントでは一般的なＳＮＳでサポートされている
ダイレクトメッセージ（ＤＭ）の機能のみを js+vue.js を使って実装します。

<BR><BR>

## 第１回の課題

今回は実習の前提となる Vue.js の動作を確認します。

[基礎から学ぶ Vue.js](https://www.amazon.co.jp/%E6%94%B9%E8%A8%822%E7%89%88-%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E5%AD%A6%E3%81%B6Vue-js-2-x%E5%AF%BE%E5%BF%9C-mio/dp/4863543239/ref=pd_vtp_sccl_2/357-0939054-3120259?pd_rd_w=jDyJO&pf_rd_p=cbb45385-7b99-44b7-a528-bff5ddaa153d&pf_rd_r=5W83K9FPAAGFWSPSR1SN&pd_rd_r=ce8b51af-023e-4da7-bf5e-4245ecd7885c&pd_rd_wg=S5e9d&pd_rd_i=4863543239&psc=1)
の第２章から第４章までのコード事例を index.html に記述して、
その動作を確認してください。

なお、コードの記述の方法が分からなければ
[Marbles Day](https://marbles.hatenablog.com/archive/category/Vue.js)
のページが参考になります。


<div style="page-break-before:always"></div>

## 参考文献

* [改訂2版 基礎から学ぶ Vue.js [2.x対応! ]](https://www.amazon.co.jp/%E6%94%B9%E8%A8%822%E7%89%88-%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E5%AD%A6%E3%81%B6Vue-js-2-x%E5%AF%BE%E5%BF%9C-mio/dp/4863543239/ref=pd_vtp_sccl_2/357-0939054-3120259?pd_rd_w=jDyJO&pf_rd_p=cbb45385-7b99-44b7-a528-bff5ddaa153d&pf_rd_r=5W83K9FPAAGFWSPSR1SN&pd_rd_r=ce8b51af-023e-4da7-bf5e-4245ecd7885c&pd_rd_wg=S5e9d&pd_rd_i=4863543239&psc=1)
* [基礎から学ぶ Vue.js 書籍用サポートページ](https://cr-vue.mio3io.com/)
* [Vue -- Marbles Day](https://marbles.hatenablog.com/archive/category/Vue.js)


<div style="page-break-before:always"></div>

## ディレクトリー

|名前|解説|
|---|----|
|README.md|概要説明（英文、今はダミー）|
|README-ja.md|概要説明（和文、このファイル）|
|README-ja.pdf|概要説明（和文、PDF版）|
|shrinkwrap.yaml|glitchのファイル（触らない）|
|LICENSE|ライセンス|
|package.json|npm パッケージの管理ファイル（後日説明）|
|server.js|サーバー側のコード|
|public/index.html|クライアント側のコード|
|public/favicon.ico|ブラウザー用のアイコンイメージ|
| | |
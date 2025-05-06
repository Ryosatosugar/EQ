# 保育Ready - デザイン用紙ダウンロード支援サイト

保育Readyは、保育士が日々行っている「紙を使った装飾作業」や「子ども向けの用紙作成」などの業務負担を軽減するために開発されたWebサービスです。

## 概要

保育園や幼稚園の現場では、教室の壁に貼る装飾や子どもの遊びに使う紙を、季節やイベントに合わせて毎回作成する必要があります。このサイトでは、デザイン済みの用紙を検索・ダウンロードでき、作業効率を大幅に向上させることができます。

## 主な機能

* 季節イベントなどのキーワードで用紙を検索
* デザイン済みの用紙を一覧表示
* ボタン一つで画像をダウンロード
* 管理者用機能：投稿・編集・削除

## 使用技術

* Ruby
* Ruby on Rails
* Docker
* Git / GitHub
* Heroku（デプロイ）
* AWS S3（画像の保存）

## ユーザー操作フロー

* 一般ユーザー:

  1. サイトにアクセス
  2. 検索バーにキーワード入力（例: ひなまつり、春、運動会）
  3. 表示されたデザイン用紙を確認
  4. 「ダウンロード」ボタンをクリックし、画像を保存

* 管理者（アドミン）:

  1. 管理者アカウントでログイン
  2. 用紙の投稿、編集、削除が可能

## アプリURL

* デプロイ済みサイト: [https://hoikuready-2932c7a498ef.herokuapp.com](https://hoikuready-2932c7a498ef.herokuapp.com)

## リポジトリ

* GitHub: [https://github.com/Ryosatosugar/EQ](https://github.com/Ryosatosugar/EQ)

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細はLICENSEファイルをご覧ください。

## 連絡先

* 開発者: Ryosatosugar
* GitHub: [https://github.com/Ryosatosugar](https://github.com/Ryosatosugar)
  Gmail: [ryosatosugar0708@gmail.com](mailto:ryosatosugar0708@gmail.com)







## アプリの要件定義と設計
- [DBのリレーションとフォームの実装](https://github.com/Ryosatosugar/EQ/issues/4)
- [アプリの要件定義](https://github.com/Ryosatosugar/EQ/issues/56)
- [仕様書と見積もり](https://github.com/Ryosatosugar/EQ/issues/55)

## 参考資料
- [要件定義書](https://drive.google.com/file/d/15HEskz4jxJ2jWMFoKeaGEZ6aj6wbWTXn/view?usp=drive_link)
- [デザインイメージを使った仕様書](https://drive.google.com/file/d/1BWz41_ZBMU5N7ruiHXg2V97be5UMK8Lz/view?usp=drive_link)

サイトURL　 ユーザー https://hoikuready-2932c7a498ef.herokuapp.com
           アドミン　https://hoikuready-2932c7a498ef.herokuapp.com/users/sign_in



以下はアプリ起動の手順
# 開発環境（ローカル確認）
docker-compose up

# デプロイ
heroku login
heroku container:login
docker compose run -e RAILS_ENV=production web bundle exec rails assets:precompile
heroku container:push web
heroku container:release web
heroku restart


# Heroku上でアセットをプリコンパイル
heroku run rails assets:precompile
# 保育Ready - デザイン用紙ダウンロード支援サイト

保育Readyは、保育士が日々行っている「紙を使った装飾作業」や「子ども向けの用紙作成」などの業務負担を軽減するために開発されたWebサービスです。

## 概要

保育園や幼稚園の現場では、教室の壁に貼る装飾や子どもの遊びに使う紙を、季節やイベントに合わせて毎回作成する必要があります。このサイトでは、デザイン済みの用紙を検索・ダウンロードでき、作業効率を向上させることができます。

## 主な機能

* 季節イベントなどのキーワードで用紙を検索
* デザイン済みの用紙を一覧表示
* ボタン一つで画像をダウンロード
* 管理者用機能：ユーザーと同じ機能と投稿・タグの投稿、編集、削除

## 使用技術

* Ruby
* Ruby on Rails
* Docker
* Git / GitHub
* mysql2
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
  2. 画像の投稿、編集、削除が可能

## アプリURL

* ユーザー向けサイト: [https://hoikuready-2932c7a498ef.herokuapp.com](https://hoikuready-2932c7a498ef.herokuapp.com)
* 管理者ログインページ: [https://hoikuready-2932c7a498ef.herokuapp.com/users/sign\_in](https://hoikuready-2932c7a498ef.herokuapp.com/users/sign_in)

## リポジトリ

* GitHub: [https://github.com/Ryosatosugar/EQ](https://github.com/Ryosatosugar/EQ)

## 連絡先

* 開発者: Ryosatosugar
* GitHub: [https://github.com/Ryosatosugar](https://github.com/Ryosatosugar)
* Gmail: [ryosugarmed@gmail.com](mailto:ryosugarmed@gmail.com)

## アプリの要件定義と設計

* [DBのリレーションとフォームの実装](https://github.com/Ryosatosugar/EQ/issues/66)

## 開発環境でのアプリ起動手順

### ローカル確認用（Docker使用）

```bash
docker-compose up
```

### デプロイ手順（Heroku）

```bash
heroku login
heroku container:login
docker compose run -e RAILS_ENV=production web bundle exec rails assets:precompile
heroku container:push web
heroku container:release web
heroku restart
```

### Heroku上でのアセットプリコンパイル

```bash
heroku run rails assets:precompile
```

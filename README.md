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
heroku container:push web
heroku container:release web
heroku restart

# Heroku上でアセットをプリコンパイル
heroku run rails assets:precompile
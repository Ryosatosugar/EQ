FROM ruby:3.2.7

ENV APP_HOME=eq

RUN apt-get update -qq \
  && apt-get install --no-install-recommends -y \
     tzdata \
     build-essential \
     libpq-dev \
     vim \
     bash \
  && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
  && rm -rf /var/lib/apt/lists/*

RUN mkdir /$APP_HOME
WORKDIR /$APP_HOME
ENV LANG=C.UTF-8

COPY Gemfile Gemfile.lock /$APP_HOME

RUN gem install bundler:2.5.6 \
  && bundle config --global build.nokogiri --use-system-libraries \
  && bundle config --global jobs 4 retry 3 \
  && bundle install \
  && rm -rf /usr/local/bundle/cache/*

# Webpackerのinstallは削除（Importmapなら不要）
# assets:precompile も一旦削除（importmapではあまり使わないケース多い）

COPY . .

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]



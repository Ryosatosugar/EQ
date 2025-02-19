FROM ruby:3.2.7

ENV APP_HOME=eq

RUN curl -sL https://deb.nodesource.com/setup_22.x | bash \
  && apt-get update -qq \
  && apt-get install --no-install-recommends -y tzdata build-essential libpq-dev nodejs vim bash \
  && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime\
  && rm -rf /var/lib/apt/lists/* \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update && apt-get install -y yarn && rm -rf /var/lib/apt/lists/*

RUN mkdir /$APP_HOME
WORKDIR /$APP_HOME
ENV LANG=C.UTF-8

COPY Gemfile Gemfile.lock /$APP_HOME
RUN gem install bundler:2.5.6 \
  && bundle config --global build.nokogiri --use-system-libraries \
  && bundle config --global jobs 4 retry 3 \
  && bundle install \
  && rm -rf /usr/local/bundle/cache/*

RUN bundle exec rails webpacker:install
RUN SECRET_KEY_BASE=placeholder bundle exec rails assets:precompile \
    && bundle exec rails assets:clean

COPY . .

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]


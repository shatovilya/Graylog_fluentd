FROM fluent/fluentd:v1.17.1-1.2
LABEL maintainer="Shatov Ilya https://github.com/shatovilya"

USER root

# below RUN includes plugin as examples elasticsearch is not required
# you may customize including plugins as you wish
RUN apk add --no-cache --update --virtual .build-deps \
        build-base ruby-dev \
 && gem install elasticsearch -v 7.10.1 \
 && gem install gelf \
 && gem install fluent-plugin-prometheus \
 && gem install fluent-plugin-elasticsearch \
 && gem install fluent-plugin-secure-forward \
 && gem install fluent-plugin-http-healthcheck \
 && gem sources --clear-all \
 && apk del .build-deps\
 && rm -rf /home/fluent/.gem/ruby/*/cache/*.gem

COPY ./plugins /fluentd/plugins

COPY entrypoint.sh /bin/

COPY fluent.conf /fluentd/etc/fluent.conf

RUN ["chmod", "+x", "/bin/entrypoint.sh"]

# USER fluent

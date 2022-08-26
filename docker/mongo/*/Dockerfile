FROM mongo:4.4

COPY ./scripts/rs-init.sh /

COPY ./scripts/init.js /

RUN chmod +x /rs-init.sh

RUN chmod +x /init.js

ENTRYPOINT [ "/usr/bin/mongod", "--bind_ip_all", "--replSet", "rs01" ]

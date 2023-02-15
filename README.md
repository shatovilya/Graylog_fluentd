# Graylog_fluentd
The project runs Graylog + Fluentd (Logs servers).

## About the project
---

Uses the following micro service applications:

-   App Graylog
-   Fluentd-collector
-   Mongo database
-   Elasticsearch stack
-   Prometeus Exporters
-   App Backup database


## Pre-deployment preparation

---

### Swarm cluster

Create Docker swarm cluster [here](docs/docker_swarm_install.md)

### Single node docker

Before deploying the project, install Docker, Docker Compose latest versions.

## Installation

---

### Swarm cluster

For installation:
To install, run:

1. Do a git clone.

2. Create an .env file and fill with variables:

```bash
cp ./.env.swarm.temp ./.env

```

3. Build and push fluentd collector image

```bash
cp ./fluentd-collector/fluent.conf.graylog.temp ././fluentd-collector/fluent.conf

docker build ./fluentd-collector/ -t <<You remote Docker Registry>>/fluentd-collector:latest --no-cache

docker pull <<You remote Docker Registry>>/fluentd-collector:latest
```

4. Build and push mongo-setup collector image

```bash
cp ./docker/mongo-setup/scripts/rs-init.sh.temp ./docker/mongo-setup/scripts/rs-init.sh

docker build ./docker/mongo-setup/ -t <<You remote Docker Registry>>/mongo-setup:latest --no-cache

docker pull <<You remote Docker Registry>>/mongo-setup:latest
```


5. Run the project 

```bash
env $(cat .env | grep ^[A-Z] | xargs) docker stack deploy --with-registry-auth --compose-file docker-swarm.yaml graylog

```
 
**Important!!!**

We recommend using Gitlab CI using secure docker remote socket.

### Single node docker server

For installation:
To install, run:

1. Do a git clone.

2. Create an .env file and fill with variables:

```bash
cp ./.env.compose.temp ./.env

```
3. Run the project 

```bash
docker-compose -f docker-compose.yaml build
docker-compose -f docker-compose.yaml up -d
```


### Useful links

---

[The most powerful and extensible open source Wiki software](https://js.wiki/)

[Docker-db-backup](https://github.com/tiredofit/docker-db-backup)

[Secure docker remote socket](https://docs.docker.com/engine/security/protect-access/)

[Manage swarm security with public key infrastructure (PKI)](https://docs.docker.com/engine/swarm/how-swarm-mode-works/pki/)

[fluent-plugin-gelf](https://github.com/emsearcy/fluent-plugin-gelf/blob/master/lib/fluent/plugin/out_gelf.rb)

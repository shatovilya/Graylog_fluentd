# Cluster preparation docker swarm

Functional diagram

![Functional diagram](graylog_swarm.png "Text to show on mouseover")

## 1. VM preparation:

Add to /etc/sysctl.conf string.

```
vm.max_map_count=1048575
```

Add network rules.

```
sudo ufw allow from 172.16.140.0/24 to any port 2377
sudo ufw allow from 172.16.140.0/24 to any port 7946
sudo ufw allow from 172.16.140.0/24 to any port 4789
```

Reboot the VM.

## 2. Initialize the swarm and connect the nodes


manager node:
```
docker swarm init --advertise-addr <IP-address>
docker node update --label-add backend=true <backend-node>
docker network create --driver overlay --opt encrypted --subnet=10.10.10.0/24 overnet
docker node update --label-add role=master <master-node>
docker node update --label-add role=worker <worker-node>
```

backend node:

```
docker swarm join \
  --token <you-token>
```
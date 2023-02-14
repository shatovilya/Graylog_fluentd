#!/bin/bash

DELAY=25

sleep $DELAY

mongo --host mongo1:27017 <<EOF
var config = {
    "_id": "rs01",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongo1:27017",
            "priority": 3
        },
        {
            "_id": 2,
            "host": "mongo2:27017",
            "priority": 2
        },
        {
            "_id": 3,
            "host": "mongo3:27017",
            "priority": 1
        }
    ]
};
rs.initiate(config, { force: true });
EOF

echo "****** Waiting for ${DELAY} seconds for replicaset configuration to be applied ******"


sleep $DELAY

mongo --host mongo1:27017 <<EOF
rs.status();
db = db.getSiblingDB("graylog");
db.createUser({
    user: 'log',
    pwd: 'log',
    roles: [
      {
        role: 'readWrite',
        db: 'graylog',
      },
    ],
  });
EOF

sleep $DELAY
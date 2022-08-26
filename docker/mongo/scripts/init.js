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
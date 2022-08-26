rs.status();
db = db.getSiblingDB("graylog");
db.createUser({
    user: '$DB_USER',
    pwd: '$DB_PASS',
    roles: [
      {
        role: 'readWrite',
        db: 'graylog',
      },
    ],
  });

const { Pool } = require('pg')

let pool;
let config;

if (process.env.DATABASE_URL) { //it's set in Heroku
  const connectionString = process.env.DATABASE_URL
  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false
    }
  }
} else { //default local config
  config = {
    host: "ec2-54-170-190-29.eu-west-1.compute.amazonaws.com",
    database: "d5rc1qa1b5k5eh",
    user: "xscgoxtudvwele",
    password:
      "f8456fa3f695325a00315f24ff8f96d4c7e75dde02cd6eedc3ed81f3e27e3eb5",
    port: 5432,
  };
}
pool = new Pool(config)  

exports.Connection = pool
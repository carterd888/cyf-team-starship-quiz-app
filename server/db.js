const { Pool } = require("pg")

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
} else {

  const connectionString = "postgres://xscgoxtudvwele:f8456fa3f695325a00315f24ff8f96d4c7e75dde02cd6eedc3ed81f3e27e3eb5@ec2-54-170-190-29.eu-west-1.compute.amazonaws.com:5432/d5rc1qa1b5k5eh";

  config = {
    connectionString: connectionString,
    sslmode: require,
    ssl: {
      rejectUnauthorized: false
    }
}

}

/* 
{ //default local config
  config = {
    host: "ec2-54-170-190-29.eu-west-1.compute.amazonaws.com",
    database: "d5rc1qa1b5k5eh",
    user: "xscgoxtudvwele",
    password:
      "f8456fa3f695325a00315f24ff8f96d4c7e75dde02cd6eedc3ed81f3e27e3eb5",
    port: 5432,
  };
} */


pool = new Pool(config);  

exports.pool = pool; // replace with code in slack!

// module.exports = {
//   async query(text, params) {
//     const start = Date.now()
//     const res = await pool.query(text, params)
//     const duration = Date.now() - start
//     console.log('executed query', { text, duration, rows: res.rowCount })
//     return res
//   },
//   async getClient() {
//     const client = await pool.connect()
//     const query = client.query
//     const release = client.release
//     // set a timeout of 5 seconds, after which we will log this client's last query
//     const timeout = setTimeout(() => {
//       console.error('A client has been checked out for more than 5 seconds!')
//       console.error(`The last executed query on this client was: ${client.lastQuery}`)
//     }, 5000)
//     // monkey patch the query method to keep track of the last query executed
//     client.query = (...args) => {
//       client.lastQuery = args
//       return query.apply(client, args)
//     }
//     client.release = () => {
//       // clear our timeout
//       clearTimeout(timeout)
//       // set the methods back to their old un-monkey-patched version
//       client.query = query
//       client.release = release
//       return release.apply(client)
//     }
//     return client
//   }
// }

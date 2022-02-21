const mysql = require('mysql')
require('dotenv').config()

const employeeDatabase = {
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  multipleStatements: true //allows execution of multiple SQL statements
}

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        ...employeeDatabase
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;
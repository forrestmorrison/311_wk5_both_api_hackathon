const mysql = require('mysql')
const pool = require('../mysql/connection')

const getEmployeesByFirstName = (req, res) => { 
    let sql = "SELECT first_name FROM employees"
    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json("getting employees..." + rows);
    })
}
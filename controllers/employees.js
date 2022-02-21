const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getEmployees = (req, res) => {
    let sql = "SELECT * FROM employees LIMIT 50";

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json("getting employees..." + rows);
    })
}

const getEmployeesByFirstName = (req, res) => { 
    let sql = "SELECT * FROM employees WHERE first_name = ?";
    sql = mysql.format(sql, [req.body.first_name])
    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json("getting employees..." + rows);
    })
}

module.exports = {
    getEmployees,
    getEmployeesByFirstName
}
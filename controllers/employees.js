const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getEmployees = (req, res) => {
    let sql = "SELECT * FROM employees LIMIT 50";

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

const getEmployeesById = (req, res) => {
    let sql = "SELECT * FROM employees WHERE emp_no = ?";
    sql = mysql.format(sql, [req.params.emp_no]);

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

const getEmployeesByFirstName = (req, res) => { 
    let sql = "SELECT * FROM employees WHERE first_name = ?";
    sql = mysql.format(sql, [req.params.first_name]);
    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName
}
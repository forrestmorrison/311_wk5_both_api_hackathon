const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getSalaries = (req, res) => {
    let sql = "SELECT * FROM salaries LIMIT 50";

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

const getSalariesById = (req, res) => { 
    let sql = "SELECT * FROM salaries WHERE emp_no = ? LIMIT 50";
    sql = mysql.format(sql, [req.params.emp_no]);
    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

module.exports = {
    getSalaries,
    getSalariesById
}
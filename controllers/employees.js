const mysql = require('mysql')
const pool = require('../mysql/connection')

const getEmployeesByFirstName = (req, res) => { 
    let sql = "SELECT * FROM employees WHERE first_name = ?";
    sql = mysql.format(sql, [req.body.first_name])
    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json("getting employees..." + rows);
    })
}

const getSalariesById = (req, res) => { 
    let sql = "SELECT * FROM salaries WHERE emp_no = ?";
    sql = mysql.format(sql, [req.body.emp_num])
    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json("getting employee salary data..." + rows);
    })
}

module.exports = {
    getEmployeesByFirstName,
    getSalariesById
}
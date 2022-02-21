const mysql = require('mysql')
const pool = require('../mysql/connection')

const getEmployeesByFirstName = (req, res) => { 
    let sql = "SELECT * FROM employyes WHERE first_name = ?";
    sql = mysql.format(sql, [req.body.first_name])
    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json("getting employees..." + rows);
    })
}
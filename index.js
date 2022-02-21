const express = require('express');
const bodyParser = require("body-parser");
const employees = require('./routes/employees');
require('dotenv').config()
const port = process.env.PORT || 4001;
const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to our API');
// })

app.use(bodyParser.json());
app.use('/', employees);


app.listen(port, () => {
    console.log(`web server is listening on port ${port}`);
})
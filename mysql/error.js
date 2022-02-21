const handleSQLError = (res, err) => {
    console.log('SQL Error: ', err)
    return res.status(500).send('something went wrong');
  }
  
  module.exports = { handleSQLError }
const express = require('express');
const router = express.Router()

const employeeRoute = require('./employeeRoute')


// api/

router.use('/employee', employeeRoute) 

module.exports = router
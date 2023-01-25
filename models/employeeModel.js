const mongoose = require('mongoose')

const schema = mongoose.Schema

const employeeSchema = new schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  active: {
    type: Boolean,
    default: true,
  },
});


module.exports = mongoose.model('Employee', employeeSchema)
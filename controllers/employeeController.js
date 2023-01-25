const Employee = require('../models/employeeModel')




const getAllEmployees = (req, res) => {
  Employee.find({}, (err, doc) => {
    if (err) {
      return res.json({
        message: 'Employee could not be found',
      })
    }

    return res.json({
      data: doc.map((data) => {
        return {
          first_name: data.first_name, 
          last_name: data.last_name
        }
      })
    })})
}


const getUserDetails = (req, res) => {
  Employee.findById(req.params.id, (err, doc) => {
    console.log(req.params.id)
    if (err) {
      return res.json({
        message: 'Employee could not be found',
      })
    }
    return res.json({
      data: doc
    })
  })
}

const createEmployee = (req, res) => {
  const employee = new Employee(req.body)

  Employee.exists({email: employee.email}, (err, doc) => {
    if(doc){
      return res.json({
        message: 'Employee already exists',
      })
    }
  })
  employee.save((err, doc) => {
    if (err) {
      return res.json({
        message: 'Employee could not be created',
      })
    }
    return res.json({
      message: 'Employee created successfully',
      data: employee
    })
  })
}


const removeEmployee =(req, res) => {
  Employee.deleteOne({_id: req.params.id}, (err, doc) => {
    if (err) {
      return res.json({
        message: 'Employee could not be deleted',
      })
    }
    return res.json({
      data: doc
    })})
}


const updateEmployee =(req, res) => {
  delete req.body?.email
  Employee.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (err) {
      return res.json({
        message: 'Employee could not be updated',
      })
    }
    return res.json({
      message : 'Employee updated successfully',
      data : {
        prev: doc,
        updated: req.body
      }
    })
  }
  )
}


const blockEmployees = (req, res) => {

  Employee.findOne({_id: req.params.id}, (err, doc) => {
    if (err) {
      return res.json({
        message: 'Employee could not be found',
      })
      }
      doc.active = !doc.active
      doc.save((err, doc) => {  
        if (err) {
          return res.json({
            message: 'Employee could not be updated',
            })
      
            }
            return res.json({
              message : 'Employee updated successfully',
              data : {
                prev: doc,
              }
            })})
  })


}

module.exports = {
  createEmployee,
  removeEmployee,
  getAllEmployees,
  getUserDetails,
  updateEmployee,
  blockEmployees
}


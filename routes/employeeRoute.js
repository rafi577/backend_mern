const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController')



//  request type -> get, post, put, patch


// api/employee/

router.get("/", employeeController.getAllEmployees)   // (get) http://localhost:5000/api/employee/
router.get("/:id", employeeController.getUserDetails) // (post) http://localhost:5000/api/employee/{userId}
router.patch("/:id", employeeController.updateEmployee) // (patch) http://localhost:5000/api/employee/{userId}
router.patch("/toggle_block/:id", employeeController.blockEmployees) // (post) http://localhost:5000/api/employee/
router.post("/create", employeeController.createEmployee) // (post) http://localhost:5000/api/employee/create
router.delete("/:id", employeeController.removeEmployee) // (delete) http://localhost:5000/api/employee/remove



module.exports = router


// /api/ -> routes -> /employee /
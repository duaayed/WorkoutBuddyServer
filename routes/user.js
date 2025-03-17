const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)
//يعني اذا دخل عهاد الامتداد روح عهاي الفنكشن

// signup route
router.post('/signup', signupUser)

module.exports = router
const { check } = require('express-validator');

exports.signUpValidation = [
    check('name' , 'name is required').not().isEmpty(),
    check('email' , 'please enter valid email').isEmail().normalizeEmail({ gmail_remove_dots: true}),
    check('password' , 'password is required').isLength({ min:6}),
]

exports.loginValidation = [
    check('email' , 'please enter valid email').isEmail().normalizeEmail({ gmail_remove_dots: true}),
    check('password' , 'password is of min 6 character').isLength({ min:6}),
]

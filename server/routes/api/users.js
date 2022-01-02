const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../../config/keys').secret;
const User = require('../../../models/User');

/**
 * @route POST api/users/register
 * @description Register the User
 * @access Public 
 */
router.post('/register', (req, res) => {
    let { username, email, password, confirm_password } = req.body
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Passwords do not match."
        });
    }

    //Check for unique username
    User.findOne({ username: username }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Username is already taken."
            });
        }
    });

    //Check for unique email
    User.findOne({ email: email }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Account with this email already exists."
            });
        }
    });

    //The data is valid
    let newUser = new User({
        username,
        password,
        email
    });

    //Hash password
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User succesfully registred."
                });
            });
        });
    });
});

/**
 * @route POST api/users/login
 * @description Signing in the User
 * @access Public 
 */
router.post('/login', (req, res) => {
    User.find({ username: req.body.username }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "User not found",
                success: false
            });
        }


        bcrypt.compare(req.body.password, user[0].password).then(isMatch => {
            if (isMatch) {
                //Password is correct
                const payload = {
                    _id: user[0]._id,
                    username: user[0].username,
                    email: user[0].email
                }
                jwt.sign(payload, key, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `${token}`,
                        msg: "Login succesfull"
                    })
                })
            } else {
                return res.status(404).json({
                    msg: "Combination of username and password is incorrect",
                    success: false
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        return res.json({
            msg: "User not found",
            success: false
        });
    });
});

/**
 * @route POST api/users/profile
 * @description Return the User's data
 * @access Private 
 */
router.get('/profile', authenticateToken, (req, res) => {
    res.json(req.user);
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401).json({
            msg: 'No token'
        })
    }

    console.log(token);
    jwt.verify(token, key, (err, user) => {
        if (err) {
            return res.status(403).json({
                msg: 'Invalid token'
            })
        }
        req.user = user;
        next();
    })
}

module.exports = router;
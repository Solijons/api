const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

const passport = require('passport');

require('../passport')(passport);

// Login page
router.get('/login', (req, res) => res.send('Login'));
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/Dashboard',
    failureFlash: '/users/login',
    failureFlash: true,
  })(req, res, next);
})


// Register page
router.get('/register', (req, res) => {
    User.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
router.post('/register', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        name: req.body.name,
        birthday: req.body.birthday,
        stage: req.body.stage,
        pathology: req.body.pathology,
        address: req.body.address,
        hospital_network: req.body.hospital_network,
        diagnosis_date: req.body.diagnosis_date,
        about: req.body.about,
        status: req.body.status,
        doctor: req.body.doctor,
        connect: req.body.connect,
        topics: req.body.topics,
        surgeon: req.body.surgeon
    });
      User.findOne({ email: req.body.email })
      .then((userToCheck) => {
        if(userToCheck) {
          res.status(400).json({
            code: 400,
            message: "Email is already is used",
          })
        } else {
          user
          .save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              code: 201,
              message: "Handling POST requests to /users"
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              code: 500,
              error: err
            });
          });
        }
      })
});


// Logout
router.get('/dashboard', (req, res) => res.send('Hello Dashboard'))

module.exports = router;
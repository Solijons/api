const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');


const User = require('./models/User');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, done) => {
            User.findOne({ email: email })
                .then((userToAllow) => {
                    if (!userToAllow) {
                        return done(null, false, { msg: 'That Email is not registered' })
                    }
                })
                .catch((err) => console.log(err))
        })
    )
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}
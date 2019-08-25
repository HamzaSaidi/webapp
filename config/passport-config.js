
const localStrategy = require('passport-local').Strategy
var database = require('./database')
module.exports = (passport) => {

    //////////////////////////////setting up local login strategy///////////////////////////////////////
    /*
    the local strategy is used with html form 
    it take two fields username and password
    
    and a callback function which is the way how we want to authenticate our user
    
    
    
    
    
    
*//**
 * 
 * 
 * ///////////////////////login
 * 
 */

    passport.use('local-login', new localStrategy({
        usernameField: 'email',
         passwordField: 'password', 
        passReqToCallback: true
    },


        (req,email, password, done) => {

            console.log('passport authenticate')
 
            if (req.user) {
               
                done(null, false)

            }
            database.admin.findOne({
                
                where: {

                    email: email,
                }

            }).then((admin) => {
                //if null

                if (!admin) {
                    return done(null, false)
                }
                //password test
                 if(!admin.validPassword(password)){

                    return done(null, false)

                 }

                return done(null, admin)
            })
        }));


/**
 * 
 * 
 * //////////////////////////////////register
 *  
 * 
 * 
 */    passport.use('local-signup', new localStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
            (req, email, password, done) => {
                //if user is already logged in
                if (req.user) {
                    console('already logged in')
                    var err = { message: "you r already logged in" }
                    return done(err, false);
                }
                console.log(req.body.password1)

                /////////////////////if passwords dont match////////////
                if (req.body.password !== req.body.password1) {

                    console.log('password dont match')

                    return done(null, false)

                }

                /// if user with same credentials exist 
                database.user.findOne({
                    where: {
                        email: email
                    }
                }).then((result) => {
                    if (result !== null) {

                        return done(null, false)
                    }
               
                    database.user.create({
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password,
                        role: 'RECRUTER'
                    }).then((user) => {
                        console.log("user built with success ")

                        return done(null, user)

                    })



                }).catch((err) => {
                });

                ////////////////////////////////////////// everything is fine .////////////////////////////////


            }));

    passport.serializeUser(function (user, done) {
        done(null, user.idadmin);
    });

    passport.deserializeUser(function (id, done) {
        database.admin.findOne({
            where: {
                idadmin: id
            }
        }).then((user) => {

            if (user) {

                done(null, user);

            } else {

                console.log('hello im not deserialized')
            }

        });

    });
}
















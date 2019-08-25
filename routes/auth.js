
var express = require('express');
var router = express.Router();
var passport = require('passport')
require("../config/passport-config")(passport)

/**
 * 
 * 
 * ///////////////////////login
 * 
 */
router.get('/login', (req, res, next) => {

if(!req.user){res.render('login');}    

    next();
})


//post login credentials

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/admin/add',
    failureRedirect: '/auth/login',
    
}));



/**
 * 
 * 
 * //////////////////////////////////register
 *  
 * 
 * 
 */



// router.get('/register', (req, res, next) => {
//     //  console.log(req.user.username)
//     if (!req.user) {
//         res.render('register.ejs');
//     } else {
//         console.log('ur logged from get request')
//         res.redirect('/',)
//     }
// })


//  router.post('/register', passport.authenticate('local-signup', {successRedirect:'/',
//     failureRedirect: '/auth/register',
//     failureMessage: 'error in authentication',
//     failureMessage: true
// }),(req,res)=>{
//     res.redirect('/')
// })




/**
 * 
 * 
 * .////////////////////////////logout
 * 
 * 
 */
router.get('/logout', (req, res) => {
    if (req.user) {


        req.logOut()
        res.redirect('/')

    }
    else {
        res.send('ur not logged in')
    }

})
module.exports = router;
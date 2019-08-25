var express = require('express');
var router = express.Router();
var database = require('../config/database')

/* GET users listing. */

router.get('/add', function (req, res, next) {
  if (req.isAuthenticated()) {
    res.render('add_invoice')
  }
  res.redirect('/auth/login')
});
router.post('/add', function (req, res, next) {
  if (req.isAuthenticated()) {
    database.facture.create({

      montant: req.body.montant,
      numfacture: req.body.num_facture,
      datefacture: req.body.datefacture,
      idsociete: req.body.societe
    }).then(()=>{
      console.log('added with success')
      res.render('add_invoice')
    })



  }
});
module.exports = router;

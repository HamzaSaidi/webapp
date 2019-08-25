var Sequelize = require('sequelize')
var connection = require('./connection')


//importing tables

var admin = require('../models/admin')(connection,Sequelize)
var facture=require('../models/facture')(connection,Sequelize)
//creating database object
 connection.admin=admin
 connection.facture=facture
module.exports = connection;
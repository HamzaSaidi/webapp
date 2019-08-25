const Sequilize = require('sequelize')

var config = require('../config/config.json')["development"];

var connection= new Sequilize(config.database, config.username, config.password, {

    host: config.host,
    dialect: config.dialect,
    define: {
        timestamps: false
      },
})
module.exports=connection;
 
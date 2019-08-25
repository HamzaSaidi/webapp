/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {

  var admin = sequelize.define('admin', {
    idadmin: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prenom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
      tableName: 'admin'
    });


  // instance methods

  admin.prototype.validPassword = function (password) {


    return this.password == password;


  }
  return admin;
};

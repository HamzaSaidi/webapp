/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caissier', {
    idcaissier: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idadmin: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'admin',
        key: 'idadmin'
      }
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
    tableName: 'caissier'
  });
};

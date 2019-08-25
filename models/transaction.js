/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    idtransaction: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    datetransaction: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iduser: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    idadmin: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'admin',
        key: 'idadmin'
      }
    },
    montant: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    etat: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'transaction'
  });
};

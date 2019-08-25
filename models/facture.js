/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facture', {
    idfacture: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    montant: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    numfacture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    datefacture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idsociete: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'societe',
        key: 'idsociete'
      }
    },
    etat: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'facture'
  });
};

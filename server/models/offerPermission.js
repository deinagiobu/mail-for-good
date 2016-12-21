'use strict';
module.exports = function(sequelize, DataTypes) {
  var offerPermission = sequelize.define('offerPermission', {
    toUserId: DataTypes.STRING,
    fromUserEmail: DataTypes.STRING,
    toUserEmail: DataTypes.STRING,
    campaigns: DataTypes.STRING,
    templates: DataTypes.STRING,
    lists: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        offerPermission.belongsTo(models.user);
      }
    }
  });
  return offerPermission;
};

// const { User } = require('./user');
// const Role = require('./role');

module.exports = (sequelize, DataTypes) => {
  const User_Role = sequelize.define('User_Role', {
    selfGranted: DataTypes.BOOLEAN
  }, { timestamps: false });

  User_Role.associate = (models) => {
    models.User.belongsToMany(models.Role, { through: User_Role });
    models.Role.belongsToMany(models.User, { through: User_Role });
  };

  return User_Role;
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, { timestamps: false });

  return User;
};

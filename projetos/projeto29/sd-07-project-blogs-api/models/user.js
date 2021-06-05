const displayNameValidations = {
  len: { args: [8], msg: '"displayName" length must be at least 8 characters long' },
};
const emailValidations = {
  notEmpty: { args: true, msg: '"email" is required' },
  isEmail: { args: true, msg: '"email" must be a valid email' },
};

const passwordValidations = {
  notEmpty: { args: true, msg: '"password" is required' },
  len: { args: [6], msg: '"password" length must be 6 characters long' },
};

const imageValidations = { isUrl: { args: true, msg: 'Valid url is required' } };

const emailStructure = {
  lowercase: true,
  validate: emailValidations,
  allowNull: { args: false, msg: '"email" is required' },
  unique: { args: true, msg: 'User already registered' },
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING,
      validate: displayNameValidations,
      allowNull: { args: false, msg: '"displayName" is required' } },
    email: { type: DataTypes.STRING, ...emailStructure },
      
    password: { type: DataTypes.STRING,
      validate: passwordValidations,
      allowNull: { args: false, msg: '"password" is required' } },

    image: { type: DataTypes.STRING, validate: imageValidations },
  }, { timestamps: false, tableName: 'Users' });

  User.associate = (models) => {
    User.hasMany(models.BlogPosts, { foreignKey: 'userId', as: 'user' }); // , as: 'blogPosts' });
  };

  return User; 
};

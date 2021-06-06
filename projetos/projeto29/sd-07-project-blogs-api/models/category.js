const nameValidations = {
  notEmpty: { args: true, msg: '"name" is required' },
};

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING,
      validate: nameValidations,
      allowNull: { args: false, msg: '"name" is required' },
      unique: { args: true, msg: 'Category already registered' },
    },
  }, { timestamps: false, tableName: 'Categories' });

  return Category;
};

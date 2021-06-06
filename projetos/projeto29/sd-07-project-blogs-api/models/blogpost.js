const renameParams = {
  timestamps: true,
  createdAt: 'published',
  updatedAt: 'updated',
  tableName: 'BlogPosts',
};

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING,
      validate: { notEmpty: { args: true, msg: '"title" is required' } },
      allowNull: { args: false, msg: '"title" is required' },
    },
    content: { type: DataTypes.STRING,
      lowercase: true,
      validate: { notEmpty: { args: true, msg: '"content" is required' } },
      allowNull: { args: false, msg: '"content" is required' },
    },
    // userId: { type: DataTypes.INTEGER, foreignKey: true },
  }, { sequelize, ...renameParams });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' }); // , as: 'userId' });
    // BlogPost.hasMany(models.Category, { foreignKey: 'id', as: 'categoryId' });
  };

  return BlogPost;
};

module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategories', {
    // categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    // postId: { type: DataTypes.INTEGER, primareyKey: true },
  }, { timestamps: false, tableName: 'PostsCategories' });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPosts, { // as: 'BlogPosts',
      through: PostCategory,
      foreignKey: 'categoryId', // 'category_id',
      otherKey: 'postId', // 'post_id',
    });
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId', // 'post_id',
      otherKey: 'categoryId', // 'category_id',
    });
  };

  return PostCategory;
};
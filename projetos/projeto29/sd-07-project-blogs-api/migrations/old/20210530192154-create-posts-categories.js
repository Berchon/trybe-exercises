// cole esse código dentro do arquivo da migration "user-books"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'blogpost',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'category',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Posts_categories');
  },
};


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('tinyurl', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    longurl: {
      type: Sequelize.STRING,
    },
    shorturl: {
      type: Sequelize.STRING,
      unique: true,
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('tinyurl'),
};

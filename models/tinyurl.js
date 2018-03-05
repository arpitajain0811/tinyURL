

module.exports = (sequelize, DataTypes) => {
  const tinyurl = sequelize.define('tinyurl', {
    longurl: DataTypes.STRING,
    shorturl: { type: DataTypes.STRING, unique: true },
  }, {});
  tinyurl.associate = function (models) {
    // associations can be defined here
  };
  return tinyurl;
};

module.exports = (sequelize, DataTypes) => {
  const tinyurl = sequelize.define('tinyurl', {
    longurl: DataTypes.STRING,
    shorturl: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [6, 6],
      },
    },
  }, {});
  tinyurl.createObject = (shortUrl, longUrl) => tinyurl.findOrCreate({
    where: {
      shorturl: shortUrl,
    },
    defaults: {
      longurl: longUrl,
    },
  });
  return tinyurl;
};

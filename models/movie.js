module.exports = (sequelize, DataTypes) => {

  const Movie = sequelize.define('movie', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  Movie.associate = (models) => {
  };

  return Movie;
};
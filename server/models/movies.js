/* module.exports = (sequelize, DataTypes) => {

  const Movies = sequelize.define('movies', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 40]
      }
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  User.associate = function associate(models) {};

  return Movies;
}; */
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("image", {
    image: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Image;
};

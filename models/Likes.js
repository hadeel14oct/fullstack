export default (sequelize, DataTypes) => {
    const Likes = sequelize.define("Likes");
  
    return Likes;
  };
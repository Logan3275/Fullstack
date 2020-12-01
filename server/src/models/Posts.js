module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    fullName: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  })

  Post.associate = function (models) {
  }

  return Post
}

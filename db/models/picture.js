'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Album, User }) {
      this.belongsTo(Album, {foreignKey: 'album_id'});
      this.belongsToMany( Album, { through: 'Comment', foreignKey: 'picture_id' });
    }
  }
  Picture.init({
    url: DataTypes.STRING,
    album_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};

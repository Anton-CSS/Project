'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Picture  }) {
      this.belongsToMany( User, { through: 'UserAlbum', foreignKey: 'album_id' });
      this.hasMany(Picture, {foreignKey: 'album_id'})
    }
  }
  
  Album.init({
    title: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};

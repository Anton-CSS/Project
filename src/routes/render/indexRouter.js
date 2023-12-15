import express from 'express';
import { Picture, Album, User } from '../../../db/models'
const indexRouter = express.Router();
import { Op } from 'sequelize';
indexRouter.get('/', (req, res) => res.render('MainPage'));
indexRouter.get('/add', (req, res) => res.render('AddNewAlbum'));
indexRouter.get('/posts', async (req, res) =>{
 const users = await User.findAll({
  attributes: ['name', 'id'],
  include: [{
   model: Album,
   where: {status: false},
   attributes: ['title', 'id'],
   include: [{
    model: Picture,
    attributes: ['url'],
   }]
  }]
 });
 res.send(users)
});
indexRouter.get('/album/:title', async (req, res) => {
 const title = req.params.title;
 const album = await Album.findOne({where:{title}});
 const pictures = await Picture.findAll({where:{album_id: album.id}});
 res.render('ShowAlbum', {pictures})
}) ;



export default indexRouter;

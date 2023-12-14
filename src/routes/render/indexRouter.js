import express from 'express';
import { Picture, Album, User } from '../../../db/models'
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.render('MainPage'));
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
export default indexRouter;

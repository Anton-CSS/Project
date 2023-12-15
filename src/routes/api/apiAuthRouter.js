import express from 'express';
import bcrypt from 'bcrypt';
import { User, Album, Picture, UserAlbum } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookiesConfig from '../../config/cookiesConfig';
import multer from "multer";
const apiAuthRouter = express.Router();
import upload from "../../middlewares/file";
import { Op } from "sequelize";
apiAuthRouter.post('/reg', async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        password: hash,
      },
    });
    const plainUser = user.get();
    delete plainUser.password;

    if (!isCreated) return res.json({ message: 'Email is exist' });

    const { accessToken, refreshToken } = generateTokens({ user: plainUser });

    res
      .cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

apiAuthRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'Empty data' });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid data' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: "Email or password doesn't exist" });

    const plainUser = user.get();
    delete plainUser.password;
    const { accessToken, refreshToken } = generateTokens({ user: plainUser });

    res
      .cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

apiAuthRouter.post('/upload', upload.array('photos', 12), async (req, res, next) => {
  await Album.create({ title: req.body.title, status: req.body.status === 'on' ? true : false});
  const album = await Album.findOne({where:{title: req.body.title}, attributes: ['id']})

  const promises = req.files.map(item => Picture.create({url: item.originalname, album_id: album.id}))
  await Promise.all(promises)
  await UserAlbum.create({user_id: res.locals.user.id, album_id: album.id});
  res.redirect('/')
  });

apiAuthRouter.delete('/del', async(req, res) => {
  const title = req.body.title;
  const currentAlbum = await Album.findOne({where: {title}});
  await Picture.destroy({where: {album_id: currentAlbum.id}});
  await UserAlbum.destroy({where:{
      [Op.and] : [
        {user_id:res.locals.user.id},
        {album_id:currentAlbum.id}
      ]
    }
  })
  await Album.destroy({where: {title}});
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
})
export default apiAuthRouter;

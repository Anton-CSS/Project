import { Album } from '../../db/models';

const checkAuthor = async (req, res, next) => {
  const { id } = req.params;
  console.log(res.locals.user, id);
  const album = await Album.findOne({ where: { id, userId: res.locals.user?.id } });
  if (!album) return res.sendStatus(403);
  return next();
};

export default checkAuthor;

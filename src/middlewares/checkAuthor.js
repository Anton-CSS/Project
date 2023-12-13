<<<<<<< Updated upstream
import { Album } from '../../db/models';

const checkAuthor = async (req, res, next) => {
  const { id } = req.params;
  console.log(res.locals.user, id);
  const album = await Album.findOne({ where: { id, userId: res.locals.user?.id } });
  if (!album) return res.sendStatus(403);
  return next();
=======
import { User } from '../../db/models';

const checkAuthor = async (req, res, next) => {
    const { id } = req.params;
    console.log(res.locals.user, id);
    const user = await User.findOne({ where: { id, userId: res.locals.user.id } });
    if (!user) return res.sendStatus(403);
    return next();
>>>>>>> Stashed changes
};

export default checkAuthor;

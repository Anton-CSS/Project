const checkAuthRedirect = (req, res, next) => {
  if (req.cookies?.refreshToken) {
    res.redirect('/add');
  }
  return next();
};

export default checkAuthRedirect;

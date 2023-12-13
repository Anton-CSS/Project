const checkAuthRedirect = (req, res, next) => {
  if (req.cookies?.refreshToken) {
    res.redirect('/');
  }
  return next();
};

export default checkAuthRedirect;

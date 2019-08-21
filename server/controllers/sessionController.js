module.exports = {
  sessionLogin: (req, res, next) => {
    req.session.loggedIn = true;
    req.session.username = res.locals.username;
    next();
  },
  sessionLogout: (req, res, next) => {
    req.session.destroy(() => next());
  },
};

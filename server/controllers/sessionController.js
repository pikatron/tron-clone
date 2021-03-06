module.exports = {
  sessionLogin: (req, res, next) => {
    req.session.loggedIn = true;
    req.session.username = res.locals.username;
    next();
  },
  sessionLogout: (req, res) => {
    req.session.destroy(() => res.status(200).redirect('/'));
  },
  sessionVerify: (req, res) => {
    const { loggedIn } = req.session;

    if (loggedIn) return res.status(200).send(true);
    return res.status(403).send(false);
  },
};

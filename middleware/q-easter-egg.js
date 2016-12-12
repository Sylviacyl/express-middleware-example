function qEasterEgg(req, res, next) {
  const { path } = req;
  if (path.indexOf('q') !== -1) {
    res.render('q-easter-egg');
  }
  else{ // continue on as normal
    next();
  }
}

module.exports = qEasterEgg;

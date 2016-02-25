var api = require('./api');

const Routes = (app) => {
  if (!app) return;

  app.use('/', api);
}

module.exports = Routes;

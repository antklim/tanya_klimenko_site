var _ = require('lodash');

var all = {
  port: process.env.PORT || 3000
};

module.exports = _.merge(all, require('./' + process.env.NODE_ENV));

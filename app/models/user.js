var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  // password
  // username
  // ? session id
  tableName: 'users',
  hasTimestamps: true
});

module.exports = User;

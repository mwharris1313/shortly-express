var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  // password
  // username
  // ? session id
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){
    this.on('creating', function(){
      var that = this;
      return bcrypt.hash(this.get('password'), null, null, function(err, hash) {
        return that.set('password', hash);
      });
    }, this);
  }
});

module.exports = User;

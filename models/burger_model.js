var orm = require('../config/orm');

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // Get name from front end
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], function(res) {
      cb(res);
    });
  },
  // condition = id
  update: function(condition, cb) {
    orm.update("burgers", {devoured: true}, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
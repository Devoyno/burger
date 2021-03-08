const burger = require('../models/burger_model.js');
const router = require('express').Router();

router.get('/', function(req, res) {
  burger.all(function(data) {
    console.log(data);
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
})

module.exports = router;
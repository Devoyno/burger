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

router.put('/burgers/:id', function(req, res) {
  burger.update(req.params.id, function(data) {
    console.log(data);
    res.sendStatus(200)
  })
})

router.post('/burgers', function(req, res) {
  console.log(req.body);
  burger.create(req.body.burger_name, function(data) {
    console.log(data);
    res.redirect("/")
  })
})

module.exports = router;
var express = require('express');
var router = express.Router();

var projectsController = require('./controllers/projectsController');

/* GET home page. */
router.get('/', projectsController.renderProjects);

/* GET users listing. */
router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

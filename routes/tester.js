var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    var responseObject = packageResponse(req);
    res.json(responseObject);
});

/* POST */
router.post('/', function(req, res, next) {
    var responseObject = packageResponse(req);
    res.json(responseObject);
});

/* GET template */
router.get('/view', function(req, res, next) {
    var responseObject = packageResponse(req);
    res.render('testget',responseObject);
});

/* POST template*/
router.post('/view', function(req, res, next) {
    var responseObject = packageResponse(req);
    res.render('testpost',responseObject);
});




var packageResponse = function(req) {
    var responseObject = {
        headers: req.headers,
        cookies: req.cookies,
        formData: req.body,
        query: req.query
    };
    return responseObject;
};

module.exports = router;

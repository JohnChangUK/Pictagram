var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {
    var resource = req.params.resource;

    var controller = controllers[resource];
    if (controller == null) {
      res.json({
        confirmation: 'Failure... Invalid Resource!',
        message: 'Invalid Resource'
      });

      return;
    }

    controller.get(req.query, false)
    .then(function(results) {
      res.json({
        confirmation: 'Success!',
        results: results
      });
    })
    .catch(function(err) {
      res.json({
        confirmation: 'fail',
        message: "Invalid resource!"
      });
    });
});

router.get('/:resource/:id', function(req, res, next) {
    var resource = req.params.resource;

    var controller = controllers[resource];
    if (controller == null) {
      res.json({
        confirmation: 'Failure... Invalid Resource!',
        message: 'Invalid Resource'
      });

      return;
    }

    controller.getById(req.params.id, false)
    .then(function(result) {
      res.json({
        confirmation: 'Success, here is your Result!',
        result: result
      });
    })
    .catch(function(err) {
      res.json({
        confirmation: 'fail',
        message: "Not found" // this is the error given back by the promise 'reject'
      });
    });   
});

router.post('/:resource', function(req, res, next) {

    var resource = req.params.resource;

    var controller = controllers[resource];
    if (controller == null) {
      res.json({
        confirmation: 'Failure... Invalid Resource!',
        message: 'Invalid Resource'
      });

      return;
    }
// Alll post request deliver data in the Body, 'req.body'
    controller.post(req.body, false)
    .then(function(result) {
      res.json({
        confirmation: 'Success!',
        result: result
      });
    })
    .catch(function(err) {
      res.json({
        confirmation: 'Failure... Invalid Resource!',
        message: err
      });
    });
});

module.exports = router;








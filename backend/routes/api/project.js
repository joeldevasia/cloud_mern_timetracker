let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Project Model
let ProjectSchema = require('../../models/projects/project.models');

// Add Project
router.route('/add-project').post((req, res, next) => {
  ProjectSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// List Projects
router.route('/all-project').get((req, res) => {
  ProjectSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Get Project
router.route('/:id').get((req, res) => {
  ProjectSchema.findById(req.params.id)
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update Projects
router.route('/update/:id').put((req, res, next) => {
  ProjectSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error),
      console.log(error)
    } else {
      res.json(data)
      console.log('Project updated successfully !')
    }
  })
})


module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Student = models.Student; 

module.exports = router;

router.param('studentId', (req,res, next) =>{
  req.id = req.params.studentId
  next();
}); 

router.get('/', (req,res,next) =>{
  Student.findAll()
  .then(allStudents => {
    res.json(allStudents)
  })
  .catch(next);
});

router.get('/:studentId', (req,res,next) =>{
  Student.findOne({
    where: {
      id: req.id
    }
  })
  .then(student =>{
    res.json(student)
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  console.log('CREATE NEW USER', req.body);
  Student.create(req.body)
  .then(newStudent =>{
    res.status(201).json(newStudent)
  })
  .catch(next);
}); 

router.put('/:studentId', (req, res, next) => {
  Student.update(req.body, {
    where: {
      id: req.id
    }
  })
  .then(updatedStudent => res.status(200).json(updatedStudent))
  .catch(next);
}); 

router.delete('/:studentId', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.id
    }
  })
  .then( () => res.status(204).end())
  .catch(next);
}); 
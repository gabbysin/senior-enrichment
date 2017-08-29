'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Campus = models.Campus; 

module.exports = router;

router.param('campusId', (req,res, next) =>{
  req.id = req.params.campusId
  next();
}); 

router.get('/', (req,res,next) =>{
  Campus.findAll()
  .then(allCampuses => { 
    res.json(allCampuses)
  })
  .catch(next);
});

router.get('/:campusId', (req,res,next) =>{
  Campus.findOne({
    where: {
      id: req.id
    }
  })
  .then(campus => {
    res.json(campus)
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(newCampus =>{
    res.status(201).json(newCampus)
  })
  .catch(next);
}); 

router.put('/:campusId', (req, res, next) => {
  Campus.update(req.body, {
    where: {
      id: req.id
    }
  })
  .then(updatedCampus => res.status(200).json(updatedCampus))
  .catch(next);
}); 

router.delete('/:campusId', (req, res, next) => {
  Campus.destroy({
    where:{
      id: req.id
    }
  })
  .then ( () => res.status(204).end() )
  .catch(next); 
}); 


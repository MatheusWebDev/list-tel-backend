const express = require('express');
const router = express.Router();
const Operadora = require('../models/operadora');

router.get('/', function (req, res, next) {
  Operadora.find({})
    .then(operadoras => res.send(operadoras))
    .catch(err => next(err));
});

router.post('/', function (req, res, next) {
  Operadora.create(req.body)
    .then(newOperadora => res.status(201).send(newOperadora))
    .catch(err => next(err));
});

router.delete('/:id', function (req, res, next) {
  Operadora.findByIdAndRemove(req.params.id)
    .then(operadora => res.send(operadora))
    .catch(err => next(err));
});

module.exports = router;
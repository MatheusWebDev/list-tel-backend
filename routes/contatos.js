const express = require('express');
const router = express.Router();
const Contato = require('../models/contato');

router.get('/', function (req, res, next) {
  Contato.find({})
    .then(contatos => res.send(contatos))
    .catch(err => next(err));
});

router.post('/', function (req, res, next) {
  Contato.create(req.body)
    .then(newContato => res.status(201).send(newContato))
    .catch(err => next(err));
});

router.delete('/:id', function (req, res, next) {
  Contato.findByIdAndRemove(req.params.id)
    .then(contato => res.send(contato))
    .catch(err => next(err));
});

module.exports = router;
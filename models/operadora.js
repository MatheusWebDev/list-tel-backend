const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/list-tel-backend");
mongoose.set('debug', true);
mongoose.Promise = Promise;

const operadoraSchema = new mongoose.Schema({
  nome: {
    type: String
  },
  codigo: {
    type: Number
  },
  categoria: {
    type: String
  }
});

const Operadora = mongoose.model('Operadora', operadoraSchema);

module.exports = Operadora;
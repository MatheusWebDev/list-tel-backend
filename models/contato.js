const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/list-tel-backend");
mongoose.set('debug', true);
mongoose.Promise = Promise;

const contatoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: 'Name cannot be blank!'
   },
  telefone: {
    type: String,
    required: 'Name cannot be blank!'
  },
  data: {
    type: Date,
    default: Date.now
  },
  operadora: {
    nome: {
      type: String
    },
    codigo: {
      type: Number
    },
    categoria: {
      type: String
    }
  },
  grupo: {
    type: String,
    default: 'blue'
  }
});

const Contato = mongoose.model('Contato', contatoSchema);

module.exports = Contato;
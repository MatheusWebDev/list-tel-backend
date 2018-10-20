const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const contatosRoutes = require('./routes/contatos');
const operadorasRoutes = require('./routes/operadoras');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/api/contatos", contatosRoutes);
app.use("/api/operadoras", operadorasRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(3001, function() {
  console.log("Server starting on port 3001");
});
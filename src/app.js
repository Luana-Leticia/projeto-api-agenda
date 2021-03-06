const express = require('express');
const app = express();
const cors = require('cors');
const index = require('./routes/index');
const contatos = require('./routes/contatosRoute');
const database = require('./models/repository')
database.connect();

app.use(express.json());
app.use(cors());
app.use('/', index);
app.use('/contatos', contatos);

module.exports = app;
const express = require('express');
const router = express.Router();
const controller = require('../controllers/contatosController')

// rotas e documentações

//@route GET contatos
//@desc Retornar todos os contatos
//@acess Public
//@endpoint http://localhost:porta/contatos
router.get('/', controller.getAll)

module.exports = router;
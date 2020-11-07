const express = require('express');
const router = express.Router();
const controller = require('../controllers/contatosController');

// rotas e documentações

//@route GET contatos
//@desc Retornar todos os contatos
//@acess Public
//@endpoint http://localhost:porta/contatos
router.get('/', controller.getAll);

//@route GET contato
//@params :nome
//@desc Retornar apenas um único contato pelo nome
//@access Public
//@endpoint http://localhost:porta/contatos/nome/:nome
router.get('/nome/:nome', controller.getByName);

//@route GET contato
//@params :id
//@desc Retornar apenas um único contato pelo id : identificador
//@access Public
//@endpoint http://localhost:porta/contatos/id/:id
router.get('/id/:id', controller.getById);

//@route POST contato
//@desc Adicionar um contato
//@acess Public
//@endpoint http://localhost:porta/contatos/criar
router.post('/criar', controller.addContato);

//@route DELETE contato
//@params :id
//@desc Excluir um contato pelo id : identificador
//@access Public
//@endpoint http://localhost:porta/contatos/deletar/:id
router.delete('/deletar/:id', controller.deleteContato);

module.exports = router;
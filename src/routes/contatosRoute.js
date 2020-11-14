const express = require('express');
const router = express.Router();
const controller = require('../controllers/contatosController');


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

//@route PUT contato
//@params :id
//desc Atualizar completamente um contato pelo id : identificador
//access Public
//@endpoint http://localhost:porta/contatos/atualizar/:id
router.put('/atualizar/:id', controller.updateContato);

//@route PATCH contato
//@params :id
//@desc Atualizar parcialmente um contato pelo id : identificador
//@access Public
//@endpoint http://localhost:porta/contatos/atualizar/telefone/:id
router.patch('/atualizar/telefone/:id', controller.updatePartialContato);

module.exports = router;
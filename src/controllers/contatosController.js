const contatoCollections = require('../models/contatosSchema');

const getAll = (request, response) => {
    contatoCollections.find((error, contatos) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).send({ 
                message: "Mensagem temporária de ok",
                contatos: contatos
        });
        }
    });
}

module.exports = {
    getAll
}
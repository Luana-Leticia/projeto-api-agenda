const contatoCollections = require('../models/contatosSchema');

const getAll = (request, response) => {
    contatoCollections.find((error, contatos) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(200).json({ 
                mensagem: "GET com sucesso",
                contatos: contatos
        });
        }
    });
}

const getByName = (request, response) => {
    
}

const getById = (request, response) => {
    const contatoId = request.params.id;
    contatoCollections.findById(contatoId, (error, contato) => {
        if (error) {
            response.status(500).send(error);
        } else if (contato) {
            response.status(200).send({
                mensagem: "GET com sucesso",
                contato: contato
            });
        } else {
            response.status(404).json({
                mensagem: "Contato não encontrado"
            });
        }
    })

}

const addContato = (request, response) => {
    const novoContato = request.body;
    const contatoAdicionado = new contatoCollections(novoContato);
    contatoAdicionado.save((error) => {
        if (error) {
            response.status(400).send(error);
        } else {
            response.status(200).json({
                mensagem: "POST com sucesso",
                contato: contatoAdicionado
            })
        }
    })

}

const deleteContato = (request, response) => {
    const contatoId = request.params.id;
    contatoCollections.findByIdAndDelete(contatoId, (error, contato) => {
        if (error) {
            response.status(500).send(error);
        } else if (contato) {
            response.status(200).json({
                mensagem: "DELETE com sucesso"
            });
        } else {
            response.status(404).json({ mensagem: "Contato não encontrado"});
        }
    });
}


module.exports = {
    getAll,
    getByName,
    getById,
    addContato,
    deleteContato
}
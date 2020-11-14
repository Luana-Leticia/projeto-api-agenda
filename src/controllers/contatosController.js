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
    const nomeContato = (request.params.nome).split('-').join(' ');
    contatoCollections.find({ nome: nomeContato }, (error, contato) => {
        if (error) {
            response.status(500).send(error);
        } else if (contato[0]) {
            response.status(200).json({
                mensagem: "GET com sucesso",
                contato: contato
            });
        } else {
            response.status(404).json({ mensagem: "Contato não encontrado" })
        }
    })

}

const getById = (request, response) => {
    const contatoId = request.params.id;
    contatoCollections.findById(contatoId, (error, contato) => {
        if (error) {
            response.status(404).json({ mensagem: "Contato não encontrado" });
        } else {
            response.status(200).send({
                mensagem: "GET com sucesso",
                contato: contato
            });
        }
    });

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
            response.status(400).json({ mensagem: "Requisição falhou" });
        } else if (contato) {
            response.status(200).json({ mensagem: "DELETE com sucesso" });
        } else {
            response.status(404).json({ mensagem: "Contato não encontrado" });
        }
    });
}

const updateContato = (request, response) => {
    const contatoId = request.params.id;
    const novoContato = request.body;
    const returnNew = { new: true };
    contatoCollections.findByIdAndUpdate(contatoId, novoContato, returnNew,
        (error, contato) => {
            if (error) {
                response.status(500).send(error);
            } else if (contato) {
                response.status(200).json({
                    mensagem: "PUT com sucesso",
                    contato: contato
                });
            } else {
                response.status(404).json({ mensagem: "Contato não encontrado" });
            }
        })
}

const updatePartialContato = (request, response) => {
    const contatoId = request.params.id;
    const novoTelefone = request.body.celular;
    console.log(novoTelefone)
    const returnNew = { new: true };
    if (novoTelefone) {
        contatoCollections.findByIdAndUpdate(contatoId, { $set: { celular: novoTelefone } }, returnNew,
            (error, contato) => {
                if (error) {
                    response.status(500).send(error);
                } else if (contato) {
                    response.status(200).json({
                        mensagem: "PATCH com sucesso",
                        contato: contato
                    });
                } else {
                    response.status(404).json({ mensagem: "Contato não encontrado" });
                }
            });
    } else {
        response.status(400).json({ mensagem: "Número de telefone não passado"});
    }
}

module.exports = {
    getAll,
    getByName,
    getById,
    addContato,
    deleteContato,
    updateContato,
    updatePartialContato
}
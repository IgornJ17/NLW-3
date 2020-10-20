const orphanages = require('./database/fakedata.js');

module.exports = {

    index(req, res){
        const local = { 
            cidade: "Rio de Janeiro",
            estado: "RJ"
        }
    
        return res.render('index', {local})
    }, //dessa forma cria um metodo dentro do objeto que estou exportando. Posso criar atraves do ind: function(){} ou diretamente com identificador do metodo id(){}

    orphanage(req, res){
        return res.render('orphanage')
    },

    orphanages(req, res){
        return res.render('orphanages', { orphanages })
    },

    createOrphanage(req, res){
        return res.render('createOrphanage')
    }

}//exporta um modulo criado nesse arquivo. O modulo pode ser uma funcao, objeto ou qualquer outro tipo de dado

//__dirname e uma variavel de ambiante built-in do node - nela, e armazenado o diretoria atual de trabalho
    //metodo contido no objeto Response, formado pelo metodo get do express, que envia um arquivo informado no argumento
    //o argumento request sera a variavel de referencia q sempre armazenara o pedido do client e o response sera a variavel que armazenara dos dados para resposta do servidor
    //sempre utilizaremos o response para responder algo ao client
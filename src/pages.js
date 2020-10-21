const dataOrphanages = require('./database/fakedata.js');

module.exports = {

    index(req, res){
        const local = { 
            cidade: "Rio de Janeiro",
            estado: "RJ"
        }
    
        return res.render('index', {local})
    }, 

    orphanage(req, res){
        return res.render('orphanage')
    },

    orphanages(req, res){
        return res.render('orphanages', { dataOrphanages })
    },

    createOrphanage(req, res){
        return res.render('createOrphanage')
    }

}
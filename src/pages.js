const database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage.js')


module.exports = {

    index(req, res){
        const local = { 
            cidade: "Rio de Janeiro",
            estado: "RJ"
        }
    
        return res.render('index', {local})
    }, 

    async orphanage(req, res){
        const id = req.query.id;

        try {
            const db = await database;
            const selectOrphanage = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = selectOrphanage[0]
            orphanage.images = orphanage.images.split(',')
            orphanage.firstImage = orphanage.images[0];
            orphanage.visit_on_weekends = false;

            return res.render('orphanage', { orphanage })
        } catch (error) {
            console.log(error.message)
            return res.send('Error no banco de dados.')
        }
        
    },

    async orphanages(req, res){
        try {
            const db = await database;
            const dataOrphanages = await db.all(" SELECT * FROM orphanages");
            return res.render('orphanages', {dataOrphanages})
        } catch (error) {
            console.log(error.message)
            return res.send('Error no banco de dados.')
        }
    },

    createOrphanage(req, res){
        return res.render('createOrphanage')
    }

}
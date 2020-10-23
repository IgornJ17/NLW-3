const database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage.js');
const Functions = require('./aux_functions.js');

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
            const orphanage = await Functions.selectOrphanageWithId(id);
            return res.render('orphanage', { orphanage })

        } catch (error) {
            console.log(error.message)
            return res.send('Error no banco de dados.')
        }
        
    },

    async orphanages(req, res){
        try {
            const dataOrphanages = await Functions.selectAllOrphanages();
            console.log(dataOrphanages);
            return res.render('orphanages', { dataOrphanages })
        } catch (error) {
            console.log(error.message)
            return res.send('Error no banco de dados.')
        }
    },

    createOrphanage(req, res){
        return res.render('createOrphanage')
    },

    async saveDataOrphanage(req, res){
        const fields = req.body
        console.log(fields)
        Functions.validField(fields);
        try{
            const db = await database;
            await saveOrphanage(db, {
                name: fields.name,
                description: fields.about,
                images: fields.image.toString(),
                lat: fields.lat,
                lng: fields.lng,
                wpp: fields.wpp,
                instructions: fields.instructions,
                visitHour: fields['visit_hour'],
                visitOnWeekends: fields['on-weekends']
            })

            res.redirect('/orphanages')
        }catch(error){
            console.log(error.message)
        }
    }

}
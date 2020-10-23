const database = require('./database/db.js');
const saveOrphanage = require('./database/saveOrphanage.js');

module.exports = {

    validField(aObjectForm){
        try{
              let valid = true; //Boolean assume o valor False como padrao em sua declaracao
              Object.values(aObjectForm).forEach(function(value){
                  if(value == '' || value == undefined || value == null ){
                        valid = false;
                        return;
                  }
              })
              if(valid){
                 console.log("Formulario devidamente preenchido");
                 return 0;
              }
              else{
                console.log("Formulario nao foi preenchido");
                return 1;
              }
        }catch(error){
            console.log(error.message)
            return 1; 
        }
    },

    async selectAllOrphanages(){
       try{
            const db = await database;
            var result = await db.all("SELECT * FROM orphanages");
            return result;
       }catch(error){
           console.log("Error no banco de dados")
           console.log(error.message)
           return 1; 
       } 
    },

    async selectOrphanageWithId(id){
        try{
            const db = await database;
            var selectOrphanage = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            var result = selectOrphanage[0]

            result.images = result.images.split(',')
            result.firstImage = result.images[0];

            result.visit_on_weekends = this.validVisitWeekend(result.visit_on_weekends);

            return result;
        }catch(error){
            console.log("Error no banco de dados")
            console.log(error.message)
            return 1; 
        }
    },

    validVisitWeekend(aObject){
        var result;
        if(aObject == 0){
          result = false;
          return result;
        }
        else{ 
            result = true;
            return result;
        }
    }

    //espaco para colocar outra funcionalidade

      
}
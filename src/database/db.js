const Database = require('sqlite-async');

//Function de criacao da base de dados Orphanages caso ela nao exista
function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            wpp TEXT,
            images TEXT,
            instructions TEXT,
            visit_hours TEXT,
            visit_on_weekends TEXT
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) 
//Utilizando a funcionalidade/metodo "then()" de uma Promise do Js para executar uma funcao assim que for finalizada open
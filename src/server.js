
function test(){
    console.log("teste")
}


const express = require('express') 
const path = require('path'); 
const pages = require('./pages.js')


const server = express() 
server.use(express.urlencoded({ extended: true })) 
server.use(express.static('public'))
server.set("views", path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

//cria a rota de request
server.get('/', pages.index) 
server.get('/orphanage', pages.orphanage) 
server.get('/orphanages', pages.orphanages) 
server.get('/createOrphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveDataOrphanage) 

server.listen(5500) 


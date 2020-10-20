
function test(){
    console.log("teste")
}

//importacao de dependencias para a execucao do servidor
const express = require('express') //A function built-in require() faz a importacao dos modulos do pacote informado
const path = require('path'); //path e uma dependencia com modulos de gerenciamento de arquivos do node. path e uma dependencia built-in do Node
const pages = require('./pages')


const server = express() //Cria o objeto express e atribui a instancia dele para a variavel de dependencia server.
server.use(express.static('public'))// Use e o metodo de configuracao que nesse caso ira criar a rota para utilizacao dos arquivos estaticos.
//static e o metodo que define um diretorio como o responsavel por armazenas os arquivos estaticos da aplicacao.

server.set("views", path.join(__dirname, 'views'))//o metodo set() e utilizado para configurar uma funcionalidade ao servidor
//Esse set esta configurando no server o caminho escolhido para o acesso aos arquivos da views
server.set('view engine', 'hbs')//aqui o set esta configurando o servidor pra definir a view engine como hbs
//nessa hora eu preciso alterar o formato de arquivo de todos os arquivos contidos na pasta views que eu defini na view engine

//cria a rota de request
server.get('/', pages.index) // a chamada ao metodo index esa por referencia pra ser executada toda vez q o get for executado
//Metodo get recebe a rota chamada pelo client(request) e trata essa chamada com a funcao recebida com segundo parametro
server.get('/orphanage', pages.orphanage) 
server.get('/orphanages', pages.orphanages) 
server.get('/createOrphanage', pages.createOrphanage) 

//Ligando o servidor /  colocando o server de pe
server.listen(5500) // Listen e o metodo que informa em qual porta de acesso o servidor ira escutar externamente e assim coloca o servidor de pe
//disponivel para receber requests

// console.log(request.query)//query e a propriedade contida no objeto request que contem todos os dados passados pela url. O query contem um objeto com os dados contidos na query string da url
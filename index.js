// importar handlebars :)
var exphbs  = require('express-handlebars');

const assert= require('assert');

// importar módulo
const express = require('express');
// importar body parser
var bodyParser = require('body-parser');
// importar file system
var fs = require('fs');

const MongoClient = require('mongodb').MongoClient;
// instanciar app
const app = express();
//lineas de handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const createRoutes = require('./routes.js');

// configuración body parser para poder usar variables post en el body
app.use(bodyParser.urlencoded({ extended: true }));

// definir puerto
const port = 3000;

const client = new MongoClient('mongodb+srv://ceballosdavid12:stevenson112@cluster0-iftk0.mongodb.net/tienda?retryWrites=true&w=majority');
client.connect((error)=>{
    assert.equal(null,error);
    const db= client.db('tienda');
    createRoutes(app,db);
}
);
// definir una carpeta como pública
app.use(express.static('public'));



app.listen(process.env.PORT ||3000);
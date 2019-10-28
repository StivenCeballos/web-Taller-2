// importar handlebars :)
var exphbs  = require('express-handlebars');
 

// importar módulo
const express = require('express');
// importar body parser
var bodyParser = require('body-parser');
// importar file system
var fs = require('fs');

// instanciar app
const app = express();
//lineas de handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// configuración body parser para poder usar variables post en el body
app.use(bodyParser.urlencoded({ extended: true }));

// definir puerto
const port = 3000;

// definir una carpeta como pública
app.use(express.static('public'));
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/btRoutes');
const mongoose = require('mongoose');// Da la conexion entre NodeJS y MongoDB
const app = express();
const PORT = 8080; //puerto donde se levanta el servidor

//Conexion y base de datos
mongoose.connect('mongodb://localhost:27017/BT', {useNewUrlParser: true}).then(
    () => {
        console.log('Conexion a DB Exitosa!')
    },
    error => {
        console.log(`Error en la conexion:
                    ${error}`)
    });

// ******** Manejo de Miiddlwares  ******** //

// configuracion de cors
app.use(function (req, res, next) {
    //habilita CORS
    res.header('Access-Control-Allow-Origin', '*'); // accesos de differentes origenes
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

//archivos estaticos
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use('/bt', routes);

//levantamiento del servidor
app.listen(PORT, () => {
    console.log(`Corriendo en el Puerto: ${PORT}`)
});





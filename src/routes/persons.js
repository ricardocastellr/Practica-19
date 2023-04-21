const express = require('express'); // Inyectamos express
const router = express.Router(); // Generamos la instancia del router
const mongoose = require('mongoose'); // Inyectamos mongoose
let Person = require('../models/persons'); // Inyectamos persons del modelo creado anteriormente

router.get('/gente', async (req, res) =>{ // Creamos una ruta para obtener todos los documentos de persons
    const Persons = await Person.find({}); // Obtenemos todas las personas y las guardamos en esta variable Persons
    res.json(Persons); // Respondemos con un json con la variable Persons (esto es para que el front-end pueda entenderlo)
});

module.exports = router; // Exportamos el router para poder acceder a el desde otros archivos
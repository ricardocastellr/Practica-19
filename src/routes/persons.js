const express = require('express'); // Inyectamos express
const router = express.Router(); // Generamos la instancia del router
const mongoose = require('mongoose'); // Inyectamos mongoose
let Person = require('../models/persons'); // Inyectamos persons del modelo creado anteriormente

router.get('/gente', async (req, res) =>{
    const Persons = await Person.find({ });
    res.json(Persons);
});

module.exports = router;
const express = require('express'); // Requerimos express
const mongoose = require('mongoose'); // Requerimos mongoose
const personsRoutes = require('./routes/persons') // Inyectamos el router de personas
require('dotenv').config(); // Requerimos dotenv y lo iniciamos

mongoose.Promise = global.Promise; // Le decimos a mongoose que use las promesas de node, estas son nativas de node y nos sirven para hacer async/await en lugar de usar callbacks
const app = express(); // Creamos una instancia de express
const port = process.env.PORT || 3000; // Definimos el puerto

app.set('view engine','ejs'); // Usamos el motor de vistas ejs para poder visualizar los views
app.use(express.urlencoded({extended: false})) // Para indicar que vamos a parsear con elementos del body

//Redirección
app.use(personsRoutes); // llamamos el router de person

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a TEST')) // Conexión correcta a MongoDB Atlas
    .catch((error) => console.error(error)) // Error en la onexión, mostramos el error

app.listen(port, () => console.log("Escuchando en el puerto: ", port)); // Iniciamos el servidor y especificamos su puerto
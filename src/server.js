const express = require('express'); // Requerimos express
const mongoose = require('mongoose'); // Requerimos mongoose
const personsRoutes = require('./routes/persons') // Inyectamos el router de personas
require('dotenv').config(); // Requerimos dotenv y lo iniciamos

mongoose.Promise = global.Promise;
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine','ejs'); // Usamos el motor de vistas ejs para poder visualizar los views
app.use(express.urlencoded({extended: false})) // Para indicar que vamos a parsear con elementos del body

//Redirección
app.use(personsRoutes); // llamamos el router de person

//routes
app.get("/", (req, res) =>{
    res.send("Welcome to my API"); // Mensaje al entrar a la raiz
})

mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas')) // Conexión correcta a MongoDB Atlas
    .catch((error) => console.error(error))

app.listen(port, () => console.log("Server listening on port", port)); // El puerto en el cual funciona






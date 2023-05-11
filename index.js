const express = require('express'); // imports en node js sin ninguna configuracion
const mongoose = require('mongoose'); // importamos mongoose
const { getAll, create } = require('./controllers/user');
const app = express();
const port = process.env.PORT || 3000; // regularmente se usa el puerto 3000

// config para recibir info
app.use(express.json()) // nos permite que nuestra peticion post reciba informacion desde el body

mongoose.connect("mongodb://localhost:27017/practica").then(() => {
    console.log("Conectado satisfactoriamente a la base de datos")
})

// rutas
app.get('/user', getAll)
app.post('/user', create)

// servidor
app.listen(port, () => { // levanta el servidor
    console.log('Servidor funcionando en el puerto: ' + port)
});

// Se importa la biblioteca de Mongoose y se asigna a la constante mongoose.
const mongoose = require("mongoose");

// Se define una función llamada dbConnect que se exportará.
const dbConnect = () => {
  // Se obtiene la cadena de conexión a la base de datos desde la variable de entorno DB_URI.
    const DB_URI = process.env.DB_URI
    // Se utiliza la función connect() de Mongoose para conectarse a la base de datos.
  // Se le pasan algunas opciones en un objeto para evitar las advertencias de Mongoose.
    mongoose.connect(
        DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    // Se obtiene la conexión a la base de datos y se define un manejador de eventos para el evento 'error'.
  // Si hay un error en la conexión, se imprimirá un mensaje de error en la consola.
    db.once('open', function() {
        console.log("CONNECTION SUCCESSFULLY");
    });
};
// Se exporta la función dbConnect para que pueda ser utilizada en otro lugar de la aplicación.
module.exports = dbConnect;
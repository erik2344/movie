// Importar el paquete express y cors
const express = require("express");
const cors = require("cors");
// Crear una instancia de express
const app = express();
// Importar la conexión a la base de datos
const dbConnect = require("./config/mongo")
app.use(cors());

app.use(express.json());

require("dotenv").config();

app.set("view engine", "ejs"),

app.use("/", require("./routes"));

// Definir el puerto en el que la aplicación va a escuchar
const port = process.env.PORT || 3000;

// Iniciar el servidor de la aplicación
app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT ${port}`);
});

// Conectar a la base de datos
dbConnect();

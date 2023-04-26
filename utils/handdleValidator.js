// Importa la función "validationResult" desde el paquete "express-validator"
const { validationResult } = require("express-validator");

// Define una función llamada "validateResults" que toma como parámetros un objeto "req", un objeto "res" y la función "next"
const validateResults = (req, res, next) => {
    try {
     // Usa la función "validationResult" para validar los resultados de la validación del middleware anterior
        validationResult(req).throw();
     // Si la validación es exitosa, llama a la siguiente función en la cadena de middlewares
        return next();
    } catch (err) {
     // Si ocurre un error de validación, establece el código de estado de la respuesta en 403 (Prohibido) y envía un objeto con la propiedad "errors" que contiene los errores de validación como respuesta

        res.status(403);
        res.send({ errors: err.array() })

    }
};

module.exports = { validateResults };

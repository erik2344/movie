// Importamos la función check de express-validator y la función validateResults de nuestro archivo handdleValidator
const { check } = require("express-validator");
const { validateResults } = require("../utils/handdleValidator");

// Creamos un array de validación para el endpoint de creación de usuario
const createUserValidator = [
    check("nombre")
    .exists()
    .notEmpty(),
    check("usuario")
    .exists()
    .notEmpty(),
    check("password")
    .exists()
    .notEmpty(),
    check("role")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

// Creamos un array de validación para el endpoint de obtención de usuario
const getUserValidator = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    // Llamamos a la función validateResults que se encarga de verificar si hubo errores en la validación y enviar una respuesta adecuada
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { createUserValidator, getUserValidator };
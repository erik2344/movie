// Importar el método check de express-validator, y la función validateResults del archivo handdleValidator.js
const { check } = require("express-validator");
const { validateResults } = require("../utils/handdleValidator");

// Definir un array de middlewares para validar la creación de una película
const createMovieValidator = [
    check("nombre")
    .exists()
    .notEmpty(),
    check("autor")
    .exists()
    .notEmpty(),
    check("año")
    .exists()
    .notEmpty(),
    check("actores")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

// Definir un array de middlewares para validar la obtención de una película por su id
const getMovieValidator = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    // Añadir el middleware validateResults, que verificará si hay errores de validación
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { createMovieValidator, getMovieValidator };
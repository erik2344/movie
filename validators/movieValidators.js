const { check } = require("express-validator");
const { validateResults } = require("../utils/handdleValidator");

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

const getMovieValidator = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { createMovieValidator, getMovieValidator };
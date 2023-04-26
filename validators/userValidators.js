const { check } = require("express-validator");
const { validateResults } = require("../utils/handdleValidator");

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

const getUserValidator = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { createUserValidator, getUserValidator };
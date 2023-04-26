//importa las funciones del paquete express-validator
const { matchedData } = require("express-validator");
//importa las funciones del archivo models.js
const { moviesModel } = require("../models")
// Importando la función handdleHttpError del archivo utils/handdleError.js
const handdleHttpError = require("../utils/handdleError")

// Función asincrónica para obtener todas las películas de la base de datos
const getMovies = async (req, res) => {
    try {
// Buscando todas las películas en la base de datos
    const data = await moviesModel.find({});
 // Imprimiendo los datos obtenidos en la consola del servidor
    console.log(data);
 // Enviando los datos obtenidos a la vista movies en formato de objeto JSON
    res.render("movies", { data });
    } catch (e) {
// Manejando los errores de manera centralizada con la función handdleHttpError
        handdleHttpError(res, "ERROR GETTING MOVIES");
    }
};

// Función asincrónica para obtener una película específica de la base de datos
const getMovie = async (req, res) => {
    try { 
        req = matchedData(req);
        const { id } = req;
        const data = await moviesModel.findById(id);
        console.log(data);
        res.send({ data });
    } catch(e) {
        handdleHttpError(res, "ERROR GETTING MOVIE");
    }
};

// Función asincrónica para eliminar una película específica de la base de datos
const deleteMovie = async (req, res) => {
    try { 
        req = matchedData(req);
        const { id } = req;
        const data = await moviesModel.deleteOne({ _id: id });
        console.log(data);
        res.send({ data });
    } catch(e) {
        handdleHttpError(res, "ERROR DELETING MOVIE");
    }
};

// Función asincrónica para actualizar una película de la base de datos mediante su ID y enviar los nuevos datos como respuesta
const updateMovie = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await moviesModel.findOneAndUpdate(
            id, body
        );
        console.log(body);
        res.send({ data })
    } catch (e) {
        handdleHttpError(res, "ERROR UPDATING MOVIE");
    }
};

// Función asincrónica para crear una película
const createMovie = async (req, res) => {
    try {
        const body = matchedData(req);
        console.log(body);
        const data = await moviesModel.create(body);
        res.send({ data })
    } catch (e) {
        handdleHttpError(res, "ERROR CREATING MOVIE");
    }
};

// Exportando las funciones de la película
module.exports = { getMovie, getMovies, deleteMovie, createMovie, updateMovie };
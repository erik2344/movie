const { matchedData } = require("express-validator");
const { moviesModel } = require("../models")
const handdleHttpError = require("../utils/handdleError")

const getMovies = async (req, res) => {
    try {
    const data = await moviesModel.find({});
    console.log(data);
    res.render("movies", { data });
    } catch (e) {
        handdleHttpError(res, "ERROR GETTING MOVIES");
    }
};

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

const updateMovie = async (req, res) => {
    try {
        // obteniendo 2 objetos a travez de uno
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

module.exports = { getMovie, getMovies, deleteMovie, createMovie, updateMovie };
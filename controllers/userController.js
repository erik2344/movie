// Importando módulos necesarios para el archivo
const { matchedData } = require("express-validator");
const { usersModel } = require("../models")
const handdleHttpError = require("../utils/handdleError")

// Función para obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
    const data = await usersModel.find({});
    console.log(data);
    res.send({ data });
    } catch (e) {
        handdleHttpError(res, "ERROR GETTING USERS");
    }
};

// Función para obtener un usuario por su ID
const getUser = async (req, res) => {
    try { 
        req = matchedData(req);
        const { id } = req;
        const data = await usersModel.findById(id);
        console.log(data);
        res.send({ data });
    } catch(e) {
        handdleHttpError(res, "ERROR GETTING USER");
    }
};

// Función para eliminar un usuario por su ID
const deleteUser = async (req, res) => {
    try { 
        req = matchedData(req);
        const { id } = req;
        const data = await usersModel.deleteOne({ _id: id });
        console.log(data);
        res.send({ data });
    } catch(e) {
        handdleHttpError(res, "ERROR DELETING USER");
    }
};

// Función para actualizar un usuario por su ID
const updateUser = async (req, res) => {
    try {
        // obteniendo 2 objetos a travez de uno
        const { id, ...body } = matchedData(req);
        const data = await usersModel.findOneAndUpdate(
            id, body
        );
        console.log(body);
        res.send({ data })
    } catch (e) {
        handdleHttpError(res, "ERROR UPDATING USER");
    }
};

// Función para crear un usuario
const createUser = async (req, res) => {
    try {
        const body = matchedData(req);
        console.log(body);
        const data = await usersModel.create(body);
        res.send({ data })
    } catch (e) {
        handdleHttpError(res, "ERROR CREATING USER");
    }
};

module.exports = { getUser, getUsers, deleteUser, createUser, updateUser };
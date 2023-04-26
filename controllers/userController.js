const { matchedData } = require("express-validator");
const { usersModel } = require("../models")
const handdleHttpError = require("../utils/handdleError")

const getUsers = async (req, res) => {
    try {
    const data = await usersModel.find({});
    console.log(data);
    res.send({ data });
    } catch (e) {
        handdleHttpError(res, "ERROR GETTING USERS");
    }
};

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
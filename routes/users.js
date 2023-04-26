const express = require("express");
const router = express.Router();
const { getUser, getUsers, deleteUser, updateUser, createUser } = require("../controllers/userController");
const { createUserValidator, getUserValidator } = require("../validators/userValidators")

router.get("/", getUsers);

router.get("/:id", getUserValidator, getUser);

router.put("/:id", getUserValidator, createUserValidator, updateUser);

router.post("/", createUserValidator, createUser);

router.delete("/:id", getUserValidator, deleteUser);

module.exports = router;
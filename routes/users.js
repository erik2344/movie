// Importar el framework Express y crear un enrutador
const express = require("express");
const router = express.Router();

// Importar funciones controladoras para cada ruta
const { getUser, getUsers, deleteUser, updateUser, createUser } = require("../controllers/userController");
// Importar validadores para las rutas
const { createUserValidator, getUserValidator } = require("../validators/userValidators")

// Establecer una ruta que responde a una solicitud GET para obtener todos los usuarios
router.get("/", getUsers);

// Se usa el validador de getUserValidator para verificar que el parámetro de ID sea válido
router.get("/:id", getUserValidator, getUser);

//el validador de createUserValidator para validar los datos enviados en el cuerpo de la solicitudrouter.put("/:id", getUserValidator, createUserValidator, updateUser);
router.post("/", createUserValidator, createUser);

// Establecer una ruta que responde a una solicitud POST para crear un nuevo usuario
router.delete("/:id", getUserValidator, deleteUser);

module.exports = router;
// Importamos la librería Express y el objeto Router
const express = require("express");
const router = express.Router();
// Importamos los controladores y validadores de películas
const { getMovie, getMovies, deleteMovie, updateMovie, createMovie } = require("../controllers/movieControllers");
const { createMovieValidator, getMovieValidator } = require("../validators/movieValidators")

// Definimos las rutas y asociamos los métodos de los controladores correspondientes
router.get("/", getMovies);

router.get("/:id", getMovieValidator, getMovie);

router.put("/:id", getMovieValidator, createMovieValidator, updateMovie);

router.post("/", createMovieValidator, createMovie);

router.delete("/:id", getMovieValidator, deleteMovie);

module.exports = router;

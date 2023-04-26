const express = require("express");
const router = express.Router();
const { getMovie, getMovies, deleteMovie, updateMovie, createMovie } = require("../controllers/movieControllers");
const { createMovieValidator, getMovieValidator } = require("../validators/movieValidators")

router.get("/", getMovies);

router.get("/:id", getMovieValidator, getMovie);

router.put("/:id", getMovieValidator, createMovieValidator, updateMovie);

router.post("/", createMovieValidator, createMovie);

router.delete("/:id", getMovieValidator, deleteMovie);

module.exports = router;

const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        autor: {
            type: String
        },
        año: {
            type: Number
        },
        actores: {
            type: [String]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("movies", movieSchema)

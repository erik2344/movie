const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        usuario: {
            type: Number
        },
        password: {

        },
        role: {
            type: ["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("users", userSchema)

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    cfID: {
        type: String,
        required: true,
        min: 1,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    }
});

module.exports = mongoose.model("Users", userSchema);
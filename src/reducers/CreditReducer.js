'use strict';
const mongoose = require("mongoose");

const CreditSchema = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        fullname: String,
        role: String,
        lastActive: Date,
        deletedAt: Date
}, { timestamps: true })

const Credit = mongoose.model(
    "Credit", UserSchema
)

Credit.collection.createIndex(
    {
            username: "text",
            fullname: "text",
    }
)

module.exports = Credit;
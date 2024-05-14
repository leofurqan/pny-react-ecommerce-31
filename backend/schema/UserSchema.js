const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    isActive: {
        type: Boolean,
        default: 1
    }
})

userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

module.exports = userSchema
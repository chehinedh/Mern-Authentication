const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static signup method 
userSchema.statics.signup = async function(email, password) {
 
    // validation
    if (!email || !password) {
        throw Error('Email and password are required');
    }

    if (!validator.isEmail(email)) {
        throw Error('Invalid email'); 
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Invalid password');
    }

    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use')
    }

    return user
};

// static login method
userSchema.statics.login = async function(email, password) { 
    // validation
    if (!email ||!password) {
        throw Error('Email and password are required');
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('User not found')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Password mismatch')
    }

    return user;
}

module.exports = mongoose.model('User', userSchema)
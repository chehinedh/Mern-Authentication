const mongoose = require('mongoose');

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
};

module.exports = mongoose.model('User', userSchema)
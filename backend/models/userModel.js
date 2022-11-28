const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(firstName, lastName, nickname, email, password) {
    if (!email || !password || !firstName || !lastName) {
        throw Error('All fields must be filled')
      }
      if (!validator.isEmail(email)) {
        throw Error('Email not valid')
      }
      if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
      }

    const existsEmail = await this.findOne({email})
    const ExistsNickname = await this.findOne({nickname})
    
    if(existsEmail) {
        throw Error('Email already in use')
    }

    if(ExistsNickname) {
        throw Error('User with that name already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({firstName, lastName, nickname, email, password:hash})

    return user
}

userSchema.statics.login = async function(nickname, password) {
    if(!nickname || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({nickname})
    if(!user) {
        throw Error('Incorrect nickname')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)
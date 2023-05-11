const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    id: Types.ObjectId,
    name: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 5,
        default: 'Christian Serrano'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
        minlength: 5,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    age: {
        type: Number,
        required: true
    }
})

const userModel = model('user', userSchema);

module.exports = userModel;
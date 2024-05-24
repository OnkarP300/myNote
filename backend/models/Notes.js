import mongoose from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
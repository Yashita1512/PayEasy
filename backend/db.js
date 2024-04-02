import mongoose from "mongoose";
import { string } from "zod";

mongoose.connect("mongodb+srv://yashita1512:jKKSIJs6ZqS8gk3Y@cluster0.zz3czff.mongodb.net/")

const signUpUserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('User', signUpUserSchema)

const accountbalanceSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true

    },
    balance : {
        type: Number,
        required: true
    }
})

export const Account = mongoose.model('Account', accountbalanceSchema)
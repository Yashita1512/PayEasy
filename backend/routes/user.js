import express from "express";
import { userSignupSchema, userSigninSchema, userUpdateSchema } from "./types.js";
import {User, Account} from "../db.js"
import jwt from "jsonwebtoken"
import {authMiddleware} from "../middleware.js"
import JWT_SECRET from "../config.js";

const userRouter = express.Router();

userRouter.post('/signup', async (req, res)=>{
    //ZOD datatype validation and return early if not valid 
    //sending appropriate staus code and json msg, 
    //the safeParse method returns an object with a boolean named success as one of the props, 
    //destructuring it out from that object
    const {success} =  userSignupSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    //Checking for uniqueness of username and  return early if its not
    const existingUser = await User.findOne({username: req.body.username})
    if(existingUser){
        res.status(411).json({
            message: "Email already taken"
        })
    }
    //After both checks are passed by the request body, 
    //a new 'user' object is created on the database under 'User' collection
    const user = await User.create(req.body)

    await Account.create({
        userId : user._id,
        balance: 1+ Math.random()*10000
    })

    //The created user is auto assigned an id bythe database, saving it to use for authentication
    //Creating a token using the id and a secret key called JWT_SECRET
    const token = jwt.sign({
        userId: user._id,
    }, JWT_SECRET)

    //Sending this token to the user's browser in order to save it
    res.status(200).json({
        msg:"User created successfully",
        signedInUserId : user._id,
        token: token
    })
})

//Let’s an existing user sign in to get back a token.
userRouter.post('/signin', async (req,res)=>{

    //ZOD datatype validation and return early if not valid
    const {success} = userSigninSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username,         
        password: req.body.password
    })

    if(existingUser){
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET)

        res.json({
            signedInUserId : existingUser._id,
            token: token
        })
        //returning if everything went well
        return;
    }

    //sending an error msg for all other errors
    res.status(411).json({
        msg:"Error while logging in"
    })

})

userRouter.put("/", authMiddleware, async(req, res)=>{

    const {success} = userUpdateSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({_id: req.userId},
        req.body
    )

    res.json({
        message: "Updated successfully"
    })
})


userRouter.get("/bulk", async (req, res)=>{
    const users = await User.find({  
           
        $or: [{
            firstName :{
                "$regex": req.query.filter || "",
                $options: "i"
            }
        }, {
            lastName :{
                "$regex": req.query.filter || "",
                $options: "i"
            }
        }]
    })
    res.json({
        user: users.map(user=>({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

export default userRouter;


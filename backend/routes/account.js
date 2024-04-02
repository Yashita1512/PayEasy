import express from "express"
import { authMiddleware } from "../middleware.js"
import { Account, User } from "../db.js"
import mongoose from "mongoose"

const accountsRouter = express()

accountsRouter.get("/balance", authMiddleware, async (req,res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
})

accountsRouter.post("/transfer", authMiddleware, async (req, res)=>{
    const session = await mongoose.startSession();
    await session.startTransaction()
    const {amount, to} = req.body

    //fetch the accounts involved in the transactions
    const fromAccount = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction();
        res.status(400).json({
            msg: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    }).session(session)

    if(!toAccount){
        await session.abortTransaction();
        res.status(400).json({
            message: "Invalid account"
        })
    }

    //Perform the transfer
    await Account.updateOne({
        userId: req.userId
    }, {$inc : {
        balance : -amount
    }}).session(session)

    await Account.updateOne({
        userId: to
    }, {$inc : {
        balance : amount
    }}).session(session)

    //Commit the transaction
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    })
})

export default accountsRouter
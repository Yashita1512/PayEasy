import express from "express";
import userRouter from "./user.js";
import accountsRouter from "./account.js";

const router = express.Router();

router.use("/user",userRouter);
router.use("/account", accountsRouter)

export default router;
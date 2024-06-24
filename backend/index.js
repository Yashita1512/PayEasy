import express from "express";
import cors from "cors";
import {userRouter} from "./routes/user.js";
import {accountsRouter} from "./routes/account.js";

const app = express();
app.use(express.json());
const corsOptions = {
  origin: 'https://pay-easy-frontend.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.options('/signup', cors(corsOptions)); 

app.use("/user",userRouter);
app.use("/account", accountsRouter)

// Dynamically determine the port at runtime
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
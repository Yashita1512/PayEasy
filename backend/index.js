import express from "express";
import cors from "cors";
import {userRouter} from "./routes/user.js";
import {accountsRouter} from "./routes/account.js";

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*", // Allow requests from any origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  credentials: true, // Allow cookies and other credentials to be sent
  preflightContinue: false, // Disable preflight requests handling by this middleware
}));

app.use("/user",userRouter);
app.use("/account", accountsRouter)

// Dynamically determine the port at runtime
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
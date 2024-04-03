import express from "express";
import mainRouter from "./routes/index.js"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1",mainRouter);

// Dynamically determine the port at runtime
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
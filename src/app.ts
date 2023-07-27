import express from "express";
import userRoutes from "./routes/users";
import exchangeRoutes from "./routes/exchanges";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/exchanges", exchangeRoutes);

export default app;

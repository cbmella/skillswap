import express, { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/users";
import exchangeRoutes from "./routes/exchanges";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use("/users", userRoutes);
  app.use("/exchanges", exchangeRoutes);

  // Middleware para manejar errores 404
  app.use((req, res) => {
    res.status(404).send({ error: "Resource not found" });
  });

  // Middleware para manejar errores y enviar respuesta JSON
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

  return app;
}

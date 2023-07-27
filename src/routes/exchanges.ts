import express from "express";
import Exchange from "../models/Exchange";

const router = express.Router();

// Ruta para obtener todos los intercambios
router.get("/", async (req, res) => {
  const exchanges = await Exchange.find();
  res.send(exchanges);
});

export default router;

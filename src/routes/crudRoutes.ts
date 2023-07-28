import express, { Request, Response, NextFunction } from "express";
import { Model, Document } from "mongoose";
import Joi from "joi";
import { handleSuccess, asyncHandler } from "../helpers";

export function createCrudRoutes<T extends Document>(
  model: Model<T>,
  validator: Joi.ObjectSchema
) {
  const router = express.Router();

  const validate = (req: Request, res: Response, next: NextFunction) => {
    const { error } = validator.validate(req.body);
    if (error) {
      res.status(400).send({ error: error.details[0].message });
    } else {
      next();
    }
  };

  router.get(
    "/",
    asyncHandler(async (req: Request, res: Response) => {
      const items = await model.find();
      handleSuccess(res, items);
    })
  );

  router.get(
    "/:id",
    asyncHandler(async (req: Request, res: Response) => {
      const item = await model.findById(req.params.id);
      if (item) {
        handleSuccess(res, item);
      } else {
        res.status(404).send({ error: "Resource not found" });
      }
    })
  );

  router.post(
    "/",
    validate,
    asyncHandler(async (req: Request, res: Response) => {
      const newItem = new model(req.body);
      await newItem.save();
      handleSuccess(res, newItem, 201);
    })
  );

  router.put(
    "/:id",
    validate,
    asyncHandler(async (req: Request, res: Response) => {
      const item = await model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (item) {
        handleSuccess(res, item);
      } else {
        res.status(404).send({ error: "Resource not found" });
      }
    })
  );

  router.delete(
    "/:id",
    asyncHandler(async (req: Request, res: Response) => {
      const item = await model.findByIdAndDelete(req.params.id);
      if (item) {
        handleSuccess(res, { message: "Resource deleted" });
      } else {
        res.status(404).send({ error: "Resource not found" });
      }
    })
  );

  return router;
}

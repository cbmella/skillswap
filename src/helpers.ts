import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import ValidationError from "./ValidationError";

export function handleSuccess(res: Response, data: any, status = 200): void {
  res.status(status).json(data);
}

export function handleError(next: NextFunction, error: any): void {
  if (error instanceof mongoose.Error.ValidationError) {
    next(new ValidationError(error.message));
  } else {
    next(error);
  }
}

export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);

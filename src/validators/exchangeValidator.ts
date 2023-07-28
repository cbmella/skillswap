import Joi from "joi";

const exchangeSchema = Joi.object({
  user1: Joi.string()
    .required()
    .messages({ "any.required": "user1 is a required field" }),
  user2: Joi.string()
    .required()
    .messages({ "any.required": "user2 is a required field" }),
  skill1: Joi.string()
    .required()
    .messages({ "any.required": "skill1 is a required field" }),
  skill2: Joi.string()
    .required()
    .messages({ "any.required": "skill2 is a required field" }),
  status: Joi.string()
    .valid("pending", "in progress", "completed", "canceled")
    .required()
    .messages({
      "any.required": "status is a required field",
      "any.only":
        "status must be one of [pending, in progress, completed, canceled]",
    }),
  rating1: Joi.number().min(1).max(5).messages({
    "number.base": "rating1 must be a number",
    "number.min": "rating1 must be at least 1",
    "number.max": "rating1 must be at most 5",
  }),
  rating2: Joi.number().min(1).max(5).messages({
    "number.base": "rating2 must be a number",
    "number.min": "rating2 must be at least 1",
    "number.max": "rating2 must be at most 5",
  }),
});

export default exchangeSchema;

import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "name is a required field" }),
  location: Joi.string()
    .required()
    .messages({ "any.required": "location is a required field" }),
  email: Joi.string().email().required().messages({
    "any.required": "email is a required field",
    "string.email": "email must be a valid email",
  }),
  skillsCanTeach: Joi.array().items(Joi.string()).messages({
    "array.base": "skillsCanTeach must be an array",
    "string.base": "Each item in skillsCanTeach must be a string",
  }),
  skillsWantToLearn: Joi.array().items(Joi.string()).messages({
    "array.base": "skillsWantToLearn must be an array",
    "string.base": "Each item in skillsWantToLearn must be a string",
  }),
});

export default userSchema;

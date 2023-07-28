// users.ts
import User from "../models/User";
import { createCrudRoutes } from "./crudRoutes";
import userSchema from "../validators/userValidator";

const router = createCrudRoutes(User, userSchema);

export default router;

// exchanges.ts
import Exchange from "../models/Exchange";
import { createCrudRoutes } from "./crudRoutes";
import exchangeSchema from "../validators/exchangeValidator";

const router = createCrudRoutes(Exchange, exchangeSchema);

export default router;

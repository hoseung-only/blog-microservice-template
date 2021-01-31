import { Router } from "express";

import { applyErrorHandlers } from "./errorHandlers";

export const getRootRouter = () => {
  const router = Router();

  applyErrorHandlers(router);

  return router;
};

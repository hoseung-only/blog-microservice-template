import { Router } from "express";

import { applyHelloworldRouters } from "./routers/helloworld";
import { applyTestRouters } from "./routers/test";
import { applyErrorHandlers } from "./errorHandlers";

export const getRootRouter = () => {
  const router = Router();

  applyHelloworldRouters(router);
  applyTestRouters(router);
  applyErrorHandlers(router);

  return router;
};

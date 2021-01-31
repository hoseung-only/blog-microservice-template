import { Router } from "express";
import { query } from "express-validator";

import { validateParameters } from "../middlewares/validateParameters";

export const applyHelloworldRouters = (rootRouter: Router) => {
  const router = Router();

  router.get(
    "/",
    query("message").isString().optional(),
    validateParameters,
    async (req, res, next) => {
      try {
        const message = (req.query.message ?? "Hello World") as string;

        return res.status(200).json({
          message,
        });
      } catch (error) {
        return next(error);
      }
    }
  );

  rootRouter.use("/helloworld", router);
};

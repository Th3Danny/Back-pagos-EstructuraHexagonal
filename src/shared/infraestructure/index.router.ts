import { Router, Request, Response } from "express";
import pagosRouter from "../../pagos/infraestructure/pagosRouter";

const prefijo = "/api";
const indexRouter = Router();
indexRouter.use(`${prefijo}/pagos`, pagosRouter)
indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Ya quedo causa");
});


export default indexRouter;
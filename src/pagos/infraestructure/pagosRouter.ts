import { Router } from "express";
import { createPagosController } from "./dependenciesPagos";

const pagosRouter = Router();

pagosRouter
.post('/', async (req, res)=> {
    await createPagosController.run(req, res)
})

export default pagosRouter;
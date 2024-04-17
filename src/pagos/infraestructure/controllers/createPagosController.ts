import { Request, Response } from "express";
import { CreateService } from "../../application/service/createPagosService";

export class CreatePagosController{
    constructor (private readonly createPagosService: CreateService) {}
    async run(req: Request, res: Response){
        try{
            const pagos = req.body;
            const result = await this.createPagosService.run(pagos)
            res.status(201).send(result)
        } catch (err: any) {
            return res.status(500).send(err.message);
          }
    }
}
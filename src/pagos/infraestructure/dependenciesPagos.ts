import { MysqlPagosRepository } from "./DB/mysqlRepository";
import { CreateService } from "../application/service/createPagosService";
import { CreatePagosController } from "./controllers/createPagosController";

const mysqlRepository = new MysqlPagosRepository();

const createPagosService = new CreateService(mysqlRepository);
export const createPagosController = new CreatePagosController(createPagosService);
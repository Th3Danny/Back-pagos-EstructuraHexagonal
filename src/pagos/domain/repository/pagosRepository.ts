import { PagosRequest } from "../entities/pagosRequest";
export interface PagosRepository{
    create(pagosRequest:PagosRequest): Promise<PagosRequest>
}
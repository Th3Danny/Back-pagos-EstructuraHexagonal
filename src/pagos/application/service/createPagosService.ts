import { PagosRequest } from "../../domain/entities/pagosRequest";
import { PagosRepository } from "../../domain/repository/pagosRepository";
import { validatePagos } from "../../domain/validations/pagosvalidations";

export class CreateService {
    constructor(private readonly pagosRepository: PagosRepository) { }

    async run(pagos: PagosRequest): Promise<PagosRequest> {
        try {
            const resultValidation = validatePagos(pagos);
            if (resultValidation.success) {
                // Obtener la fecha actual
                const fechaActual = new Date();

                // Sumar 30 días a la fecha actual para obtener la fecha de fin
                const fechaFin = new Date(fechaActual);
                fechaFin.setDate(fechaActual.getDate() + 30);

                // Asignar las fechas al objeto pagos
                pagos.fecha_inicio = fechaActual;
                pagos.fecha_fin = fechaFin;

                // Crear el pago en el repositorio y devolver la respuesta
                const response = await this.pagosRepository.create(pagos);
                return response;
            } else {
                throw new Error("Error de validación: " + JSON.stringify(resultValidation));
            }
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
}

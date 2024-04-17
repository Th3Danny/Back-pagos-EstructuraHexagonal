import { db } from "../../../shared/application/mysqlConnection";
import { PagosRepository } from "../../domain/repository/pagosRepository";
import { PagosRequest } from "../../domain/entities/pagosRequest";

export class MysqlPagosRepository implements PagosRepository {
    create(pagosRequest: PagosRequest): Promise<PagosRequest> {
        // Obtener la fecha actual
        const fechaActual = new Date();

        // Calcular la fecha de finalización (30 días después de la fecha actual)
        const fechaFin = new Date(fechaActual);
        fechaFin.setDate(fechaFin.getDate() + 30);

        // Extraer los valores de la solicitud de pago
        const { id_especialista, numero_tarjeta, cvv, fecha_vencimiento } = pagosRequest;

        // Crear la consulta INSERT con la fecha de finalización calculada
        const query = "INSERT INTO pagos (id_especialista, fecha_inicio, fecha_fin, numero_tarjeta, cvv, fecha_vencimiento) VALUES (?, ?, ?, ?, ?, ?)";

        // Ejecutar la consulta con los parámetros correspondientes
        return db.execute(query, [id_especialista, fechaActual, fechaFin, numero_tarjeta, cvv, fecha_vencimiento])
            .then(() => {
                // Devolver la solicitud de pagos después de la inserción
                return pagosRequest;
            })
            .catch((err: any) => {
                // Manejar errores de base de datos
                throw new Error(err);
            });
    }
}

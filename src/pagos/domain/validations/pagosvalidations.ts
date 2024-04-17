import z from 'zod';
import { PagosRequest } from '../entities/pagosRequest';

const pagosSchema = z.object({
    
    numero_tarjeta: z.number({
        required_error: 'El numero de tarjeta es requerido',
        invalid_type_error: 'La tarjeta debe ser de tipo number'  
    }),
    cvv: z.number({
        required_error: 'El cvv es requerido',
        invalid_type_error: 'El cvv debe ser de tipo number'  
    }),
    fecha_vencimiento: z.string({
        required_error: 'La fecha de vencimiento es requerido',
        invalid_type_error: 'El cvv debe ser de tipo string'  
    }),

});

export const validatePagos = (pagos: PagosRequest) => {
    return pagosSchema.safeParse(pagos);
}

export const validatePagosPartial = (pagos:Partial<PagosRequest>) => {
    return pagosSchema.partial().safeParse(pagos);
}
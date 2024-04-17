export interface PagosRequest{
    id_pagos?: number;
    id_especialista?: number;
    fecha_inicio: Date;
    fecha_fin:Date;
    numero_tarjeta:number;
    cvv:number;
    fecha_vencimiento:string;
}
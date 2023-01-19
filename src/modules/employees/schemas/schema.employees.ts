import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaFactory } from "@nestjs/mongoose/dist";
import { Document } from "mongoose";


export type EmployeesDocument = Employees & Document


@Schema({
    timestamps:{ createdAt: 'create', updatedAt: 'update'},
})

export class Employees {
    @Prop({required: true})
    name:string;

    @Prop({required: true})
    surname: string;

    @Prop({required: true})
    salary: number;

    @Prop({required: true})
    position: string;

}

export const EmployeeSchema = SchemaFactory.createForClass(Employees)

/*
En el código anterior, estamos agregando las propiedades del menú de clase o, con un mejor contexto, estamos definiendo los campos
 del modelo/documento de menú que se creará en MongoDB. Con el modelo escrito, ahora podemos modificar el código para el DTO de creación
del empleado.
*/
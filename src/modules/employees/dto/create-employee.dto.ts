/* eslint-disable prettier/prettier */

import {
    IsNotEmpty,
    IsString,
    IsNumber,
    MaxLength,
    MinLength,
  } from 'class-validator';
export class CreateEmployeeDto {
       
      
        @IsString()
        @IsNotEmpty()
        @MinLength(5)
        @MaxLength(35)
        name: string;

              
        @IsString()
        @IsNotEmpty()
        @MinLength(5)
        @MaxLength(35)
        surname: string;
      
        @IsNumber()
        @IsNotEmpty()
        salary: number;

        @IsString()
        @IsNotEmpty()
        @MinLength(5)
        @MaxLength(50)
        position: string;
      }

/*
Un DTO u objeto de transferencia de datos es un objeto que define cómo se enviarán los datos a través de la red. 
Un DTO se puede escribir usando interfaces o clases simples.


Estamos usando decoradores del paquete class-validator y definiendo las reglas de validación para los 
campos de nombre, descripción y precio. Pero técnicamente, un objeto de menú también viene con campos 
creados y actualizados. MongoDB ya maneja la modificación de los valores de estos campos. Para evitar
 que los clientes pasen valores no válidos para estos campos, debemos agregar una configuración en el
  archivo src/main.ts para excluir las propiedades definidas sin decoradores en el DTO.
   También aprovecharemos esta ocasión para agregar la configuración para la tubería de validación.
*/
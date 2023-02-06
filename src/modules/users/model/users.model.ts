/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
	import { Document } from 'mongoose';

	export type UserDocument = User & Document;

	@Schema()
	export class User {
	@Prop()
	username: string;

	@Prop()
	password: string;
	}

	export const UserSchema = SchemaFactory.createForClass(User);

    /*
    Aquí, hemos definido la forma de nuestro esquema de Usuario con el decorador @Schema() y el decorador @Prop()
	
	Mongoose asignará el esquema a una colección MongoDB. El esquema define la forma de los documentos de la colección.
    */
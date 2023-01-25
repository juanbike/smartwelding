import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController} from './users.controller'
import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from "./model/users.model"



@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
		  providers: [UsersService],
		  controllers: [UsersController]
  
})
export class UsersModule {}

/*
Aquí, definimos dos rutas API y consumimos los servicios que creamos. Usamos bcrypt para codificar la contraseña del usuario.
*/
import { Module } from "@nestjs/common"
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
	import { UsersService } from "../users/users.service";
	import { MongooseModule } from "@nestjs/mongoose"
	import { UserSchema } from "../users/model/users.model"
	import { LocalStrategy } from '../auth/local.auth';


	@Module({
	  imports: [UsersModule, PassportModule, JwtModule.register({
		secret: 'secretKey',
		signOptions: { expiresIn: '60s' },
	  }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
	  providers: [AuthService, UsersService, LocalStrategy],
	  controllers: [AuthController],
	})
	export class AuthModule { }


  /*
  Aquí, importamos el PassportModule y JWTModule en la matriz de importaciones. Luego utilizamos el método de registro para registrar JWT, 
  proporcionando 	el tiempo secreto y de vencimiento.
	
	También pusimos a disposición UserSchema en las importaciones y agregamos UserService y nuestra LocalStrategy a la variedad de 
  proveedores. NOta: por razones  de seguridad, siempre guarde su secreto JWT en una variable de entorno.
	
  */

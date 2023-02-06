/* eslint-disable prettier/prettier */

import { Strategy } from 'passport-local';
	import { PassportStrategy } from '@nestjs/passport';
	import { Injectable, UnauthorizedException } from '@nestjs/common';
	import { AuthService } from './auth.service';

	@Injectable()
	export class LocalStrategy extends PassportStrategy(Strategy) {
	  constructor(private authService: AuthService) {
		super();
	  }

	  async validate(username: string, password: string): Promise<any> {
		const user = await this.authService.validateUser(username, password);
		if (!user) {
		  throw new UnauthorizedException();
		}
		return user;
	  }
	}

    /*
    Aquí, implementamos una estrategia de pasaporte local para autenticar el token web JSON. De forma predeterminada,
     la estrategia de pasaporte local espera propiedades de nombre de usuario y contraseña en el cuerpo de la solicitud.

	También implementamos el método validate() al que llamará el middleware de Passport para verificar 
    al usuario utilizando un conjunto de parámetros  	específico de la estrategia adecuada.
    */
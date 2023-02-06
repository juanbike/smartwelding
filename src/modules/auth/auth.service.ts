/* eslint-disable prettier/prettier */

import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


	@Injectable()
	export class AuthService {
		constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }
		async validateUser(username: string, password: string): Promise<any> {
			const user = await this.usersService.getUser({ username });
			if (!user) return null;
			const passwordValid = await bcrypt.compare(password, user.password)
			if (!user) {
				throw new NotAcceptableException('could not find the user');
			}
			if (user && passwordValid) {
				return user;
			}
			return null;
		}
		async login(user: any) {
			const payload = { username: user.username, sub: user._id };
			return {
				access_token: this.jwtService.sign(payload),
			};
		}
	}

  /*
  Aquí, creamos el método validateUser para verificar si un usuario de user.model coincide con un registro de usuario de la base de datos. 
	Si no hay ninguna coincidencia, el método devuelve un valor nulo. También creamos el método de inicio de sesión que usa el método jwtService.sign para
	generar un token de acceso JWT para el usuario devuelto a partir de la validación de nuestra LocalStrategy.
  */
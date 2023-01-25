import { Controller, Request, Post, UseGuards } from '@nestjs/common';
	import { AuthService } from './auth.service';
	import { AuthGuard } from '@nestjs/passport';

	@Controller()
	export class AuthController {
		constructor(private authService: AuthService) { }

		@UseGuards(AuthGuard('local'))
		@Post('auth/login')
		async login(@Request() req) {
			return this.authService.login(req.user);
		}
	}

    /*
    Aquí, usamos el decorador @UseGuards() para hacer cumplir la autenticación cuando un usuario solicita la ruta de inicio de sesión. Con la 
	clase AuthGuard, podemos autenticar a un usuario utilizando la estrategia local.
    */
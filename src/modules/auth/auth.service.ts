import { Injectable } from '@nestjs/common';
import { UserService } from './users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}

/*
Comprueba si hay un usuario con el nombre de usuario y la contraseña proporcionados y devuelve el objeto de usuario excluyendo el campo de contraseña.
*/
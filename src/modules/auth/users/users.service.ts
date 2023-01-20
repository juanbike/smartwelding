import { Injectable } from '@nestjs/common';
//import { Observable, of } from 'rxjs';

//import { Role, UserDto } from './dto/user.dto';


import { User } from '../model/user.entity';
import { Role } from '../model/role.enum';

@Injectable()
export class UserService {
    private readonly users = [
      {
        userId: 1,
        username: 'anna',
        password: '12345',
        roles: [Role.User],
    },
    {
        userId: 2,
        username: 'andrew',
        password: '54321',
        roles: [Role.Admin],
    },
    ];

    /* -----con observables
    https://medium.com/a-layman/introduction-to-nestjs-protect-apis-with-authentication-and-authorization-82e496aab795
    findOne(username: string): Observable<UserDto | undefined> {
        return of(this.users.find(user => user.username === username));
    }
    */


    /*
    https://shpota.com/2022/07/16/role-based-authorization-with-jwt-using-nestjs.html
    */
    async findOne(username: string): Promise<User | undefined> {
      return this.users.find((user) => user.username === username);
  }
}

/*
Esto es solo un trozo para burlarse de una base de datos de usuario.
*/

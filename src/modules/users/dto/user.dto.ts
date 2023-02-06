/* eslint-disable prettier/prettier */

import { Role } from "../model/role.enum";

export class UserDto {
    userId: number;
    username: string;
    password: string;
    roles: Role[]
}
export { Role };


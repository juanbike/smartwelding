/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';

import { EmployeesModule } from './modules/employees/employees.module';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/dataJuntas', 
  ), EmployeesModule, UsersModule, AuthModule],
  
  
})
export class AppModule {}

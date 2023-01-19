import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';

import { EmployeesModule } from './modules/employees/employees.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/dataJuntas'
  ), EmployeesModule],
    
})
export class AppModule {}

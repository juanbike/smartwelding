/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Employees, EmployeeSchema } from './schemas/schema.employees';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Employees.name,
        schema: EmployeeSchema,
      },
    ]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Employees, EmployeesDocument } from './schemas/schema.employees';


import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employees.name) private readonly employeeModel: Model<EmployeesDocument>,
  ) {}

/*
  create(createEmployeeDto: CreateEmployeeDto) {
    console.log(createEmployeeDto);
    return 'This action adds a new employee';
  }
*/

async create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeesDocument> {
  const employee = new this.employeeModel(createEmployeeDto);
  return employee.save();
}

/*
  findAll() {
    return `This action returns all employees`;
  }
*/

async findAll(): Promise<EmployeesDocument[]> {
  return this.employeeModel.find();
}

/*
  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }
*/

findOne(id: string) {
  return this.employeeModel.findById(id);
}

/*
  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
     return `This action updates a #${id} employee`;
  }
*/

async update(
    id: string,
  updateEmployeeDto: UpdateEmployeeDto,
): Promise<EmployeesDocument> {
  return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
}

/*
  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
*/

async remove(id: number) {
  return this.employeeModel.findByIdAndRemove(id);
}




}

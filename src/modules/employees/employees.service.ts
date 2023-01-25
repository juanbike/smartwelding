import { Injectable, NotFoundException } from '@nestjs/common';
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

/*-----------V1------------------
  create(createEmployeeDto: CreateEmployeeDto) {
    console.log(createEmployeeDto);
    return 'This action adds a new employee';
  }
*/


/*-----------V2------------------
async create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeesDocument> {
  const employee = new this.employeeModel(createEmployeeDto);
  return employee.save();
}
*/


async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<EmployeesDocument> {
  const employee = await new this.employeeModel(createEmployeeDto);
  return employee.save();
}





/*-----------V1------------------
  findAll() {
    return `This action returns all employees`;
  }
*/

/*
async findAll(): Promise<EmployeesDocument[]> {
  return this.employeeModel.find();
}
*/

async getAllEmployees(): Promise<EmployeesDocument[]> {
  const employeeData = await this.employeeModel.find();
  if (!employeeData || employeeData.length == 0) {
      throw new NotFoundException('Employee data not found!');
  }
  return employeeData;
}

/*
  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }
*/

/*
findOne(id: string) {
  return this.employeeModel.findById(id);
}
*/

async getEmployee(employeeId: string): Promise<EmployeesDocument> {
  const existingEmployee = await     this.employeeModel.findById(employeeId).exec();
  if (existingEmployee) {
   throw new NotFoundException(`Employee #${employeeId} not found`);
  }
  return existingEmployee;
}


/*
  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
     return `This action updates a #${id} employee`;
  }
*/

/*
async update(
    id: string,
  updateEmployeeDto: UpdateEmployeeDto,
): Promise<EmployeesDocument> {
  return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
}
*/


async updateEmployee(employeeId: string, updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeesDocument> {
  const existingEmployee = await   this.employeeModel.findByIdAndUpdate(employeeId, updateEmployeeDto, { new: true });
 if (!existingEmployee) {
   throw new NotFoundException(`Employee #${employeeId} not found`);
 }
 return existingEmployee;
}



/*
  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
*/


/*
async remove(id: string) {
  console.log(id);
  return this.employeeModel.findByIdAndRemove(id);
}
*/

async deleteEmployee(employeeId: string): Promise<EmployeesDocument> {
  const deletedEmployee = await this.employeeModel.findByIdAndDelete(employeeId);
 if (!deletedEmployee) {
   throw new NotFoundException(`Student #${employeeId} not found`);
 }
 return deletedEmployee;
}







}

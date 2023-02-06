/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { HttpException } from '@nestjs/common/exceptions';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}


  /*-----------V1---------------
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.createEmployee(createEmployeeDto);
  }
*/


@Post()
   async createEmployee(@Res() response, @Body() createEmployeeDto: CreateEmployeeDto) {
  try {
    const newEmployee = await this.employeesService.createEmployee(createEmployeeDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'employee has been created successfully',
    newEmployee,});
 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: 'Error: Employee not created!',
    error: 'Bad Request'
 });
 }
}


/*
  @Get()
  findAll() {
    return this.employeesService.findAll();
  }
*/


@Get()
async getEmployees(@Res() response) {
try {
  const employeeData = await this.employeesService.getAllEmployees();
  return response.status(HttpStatus.OK).json({
  message: 'All employees data found successfully',employeeData,});
 } catch (err) {
  return response.status(err.status).json(err.response);
 }
}



/*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }
*/

@Get('/:id')
async getEmployee(@Res() response, @Param('id') employeeId: string) {
 try {
    const existingEmployee = await this.employeesService.getEmployee(employeeId);
    return response.status(HttpStatus.OK).json({
    message: 'Employee found successfully',existingEmployee,});
 } catch (err) {
  throw new HttpException('Employee do not exist', HttpStatus.NOT_FOUND);
  //return response.status(err.status).json(err.response);
 }
}

/*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(id, updateEmployeeDto);
  }
*/



@Put('/:id')
async updateEmployee(@Res() response,@Param('id') employeeId: string,
@Body() updateEmployeeDto: UpdateEmployeeDto) {
  try {
   const existingEmployee = await this.employeesService.updateEmployee(employeeId, updateEmployeeDto);
  return response.status(HttpStatus.OK).json({
  message: 'Employee has been successfully updated',
  existingEmployee,});
 } catch (err) {
   return response.status(err.status).json(err.response);
 }
}





/*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
*/

@Delete('/:id')
async deleteEmployee(@Res() response, @Param('id') employeeId: string)
{
  try {
    const deletedEmployee = await this.employeesService.deleteEmployee(employeeId);
    return response.status(HttpStatus.OK).json({
    message: 'employee deleted successfully',
    deletedEmployee,});
  }catch (err) {
    return response.status(err.status).json(err.response);
  }
 }







}

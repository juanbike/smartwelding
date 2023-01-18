import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}

/*
There is no need to modify the update-menu.dto.ts file as it is partially extended from the CreateMenuDto.
*/
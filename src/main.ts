/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './modules/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

app.useGlobalFilters(new HttpExceptionFilter);
  await app.listen(3000);
}
bootstrap();

/*
Con la opción de la lista blanca establecida en verdadero, ValidationPipe eliminará automáticamente todas 
las propiedades que no estén en la lista blanca, donde no incluidas en la lista blanca significa 
propiedades sin ningún decorador de validación o que no estén presentes en el DTO.
*/
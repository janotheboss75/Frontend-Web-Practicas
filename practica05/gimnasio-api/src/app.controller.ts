import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service.js';


interface Clase {
  id: number;
  nombre: string;
}

const clases: Clase[] = [
  {id: 1, nombre: 'Yoga'},
  {id: 2, nombre: 'Pilares'},
  {id: 3, nombre: 'Spinning'}
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clases')
  listar(): Clase[] {
    return clases;
  }

  @Post('clases')
  crear(@Body() nuevaClase: Clase): Clase {
    clases.push(nuevaClase);
    return nuevaClase;
  }
}

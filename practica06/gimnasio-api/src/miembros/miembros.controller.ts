import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { MiembrosService } from './miembros.service.js';
import type { CrearMiembroDto } from './dto/crear-miembro.dto.js';
import type { ActualizarMiembroDto } from './dto/actualizar-miembro.dto.js';

@Controller('miembros')
export class MiembrosController {

    constructor(private readonly servicio: MiembrosService) {}

    @Get()
    async listar() {
        const lista = await this.servicio.listar();
        return lista;
    }

    @Get(':id')
    async buscar(@Param('id') id: string) {
    const miembro = await this.servicio.buscar(Number(id));
    if (!miembro) {
        throw new NotFoundException(`No existe el miembro ${id}`);
    }
        return miembro;
    }

    @Post()
    async crear(@Body() dto: CrearMiembroDto) {
        const nuevoMiembro = await this.servicio.crear(dto);
        return nuevoMiembro;
    }

    @Put()
    async actualizar(@Body() dto: ActualizarMiembroDto) {
        // Asignamos el ID de la URL al DTO para que tu servicio lo pueda leer
        
        const actualizado = await this.servicio.actualizar(dto);
        if (!actualizado) {
            throw new NotFoundException(`No se pudo actualizar: No existe el miembro ${dto.id}`);
        }
        return actualizado;
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        await this.servicio.eliminar(Number(id));
        return { mensaje: `El miembro con id ${id} fue eliminado correctamente` };
    }

}

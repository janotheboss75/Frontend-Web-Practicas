import { Inject, Injectable } from '@nestjs/common';
import type { MiembroMemoriaRepository } from './infra/miembro-memoria.repository.js';
import { MIEMBRO_REPOSITORY } from './infra/miembros.tokens.js';
import { Miembro, NuevoMiembro } from './dominio/entidades.js';
import { CrearMiembroDto } from './dto/crear-miembro.dto.js';
import { ActualizarMiembroDto } from './dto/actualizar-miembro.dto.js';

@Injectable()
export class MiembrosService {
    constructor(@Inject(MIEMBRO_REPOSITORY) 
        private readonly repo: MiembroMemoriaRepository) {}

    listar(): Promise<Miembro[]> {
        return this.repo.listar();
    }

    buscar(id: number): Promise<Miembro | null> {
        return this.repo.buscarPorId(id);
    }

    async crear(dto: CrearMiembroDto): Promise<Miembro> {
        // Aquí podrías agregar validaciones de negocio antes de guardar, 
        // como verificar si el email del miembro ya existe.
        const miembro : NuevoMiembro = {
            nombre: dto.nombre,
            correo: dto.correo,
            membresia: dto.membresia,
            activo: true
        }

        return await this.repo.guardar(miembro);
    }

    async actualizar(dto: ActualizarMiembroDto): Promise<Miembro | null> {
        let miembro = await this.repo.buscarPorId(dto.id);

        if(!miembro){
            return null;
        }

        const miembroActualizado: Miembro = {
                id: dto.id,
                nombre: dto.nombre ?? miembro.nombre,
                correo: dto.correo ?? miembro.correo,
                membresia: dto.membresia ?? miembro.membresia,
                activo: dto.activo ?? miembro.activo
            };

        return await this.repo.actualizar(miembroActualizado);
    }

    eliminar(id: number): Promise<void> {
        return this.repo.eliminar(id);
    }

}

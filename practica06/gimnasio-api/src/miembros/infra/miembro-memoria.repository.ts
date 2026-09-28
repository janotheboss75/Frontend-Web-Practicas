import { Injectable } from "@nestjs/common";
import { MiembroRepository } from "../dominio/miembro.repository.js";
import { Miembro, NuevoMiembro } from "../dominio/entidades.js";

@Injectable()
export class MiembroMemoriaRepository implements MiembroRepository {
    miembros: Miembro[] = [
      { id: 1, nombre: 'Karla Duarte', correo: 'karla@itson.mx', membresia: 'premium', activo: true },
      { id: 2, nombre: 'Omar Valdez', correo: 'omar@itson.mx', membresia: 'plus', activo: true },
      { id: 3, nombre: 'Sofia Ibarra', correo: 'sofia@itson.mx', membresia: 'basica', activo: true },
    ];
    private siguienteId = 3;

    async listar(): Promise<Miembro[]> {
        return this.miembros;
      }
    
    async buscarPorId(id: number): Promise<Miembro | null> {
        return this.miembros.find((i) => i.id === id) ?? null;
    }

    async guardar(datos: NuevoMiembro): Promise<Miembro> {
        const nueva: Miembro = {
          id: this.siguienteId++,
          nombre: datos.nombre,
          correo: datos.correo,
          membresia: datos.membresia,
          activo: datos.activo
        };
        this.miembros.push(nueva);
        return nueva;
    }

    async actualizar(datos: Miembro): Promise<Miembro | null> {
        const miembro = this.miembros.find((i) => i.id === datos.id);

        if (!miembro) {
            return null;
        }

        miembro.nombre = datos.nombre ?? miembro.nombre;
        miembro.correo = datos.correo ?? miembro.correo;
        miembro.membresia = datos.membresia ?? miembro.membresia;
        miembro.activo = datos.activo ?? miembro.activo;

        return miembro;
    }

    async eliminar(id: number): Promise<void> {
        const indice = this.miembros.findIndex((i) => i.id === id);
        
        if (indice !== -1) {
            this.miembros.splice(indice, 1);
        }
    }
}
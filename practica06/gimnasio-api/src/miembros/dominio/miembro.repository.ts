import { Miembro, NuevoMiembro } from "./entidades.js";

export interface MiembroRepository {
    listar(): Promise<Miembro[]>;
    buscarPorId(id: number): Promise<Miembro | null>;
    guardar(datos: NuevoMiembro): Promise<Miembro>;
    actualizar(datos: Miembro): Promise<Miembro | null>;
    eliminar(id: number): Promise<void>
}
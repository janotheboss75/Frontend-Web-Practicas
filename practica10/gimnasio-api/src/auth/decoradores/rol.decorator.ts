import { SetMetadata } from '@nestjs/common';
import { Rol } from '../dominio/usuario';

export const CLAVE_ROLES = 'roles';

// Permite pasar uno o varios roles permitidos: @Roles(Rol.admin, Rol.entrenador)
export const Roles = (...roles: Rol[]) => SetMetadata(CLAVE_ROLES, roles);
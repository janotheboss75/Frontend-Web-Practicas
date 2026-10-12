import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CLAVE_ROLES } from '../decoradores/rol.decorator';
import { Rol, PayloadJwt } from '../dominio/usuario';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(contexto: ExecutionContext): boolean {
    // Extrae los roles requeridos definidos en el decorador @Roles(...)
    const rolesPermitidos = this.reflector.getAllAndOverride<Rol[]>(CLAVE_ROLES, [
      contexto.getHandler(),
      contexto.getClass(),
    ]);

    // Si la ruta no exige ningún rol en específico, se permite el acceso
    if (!rolesPermitidos || rolesPermitidos.length === 0) {
      return true;
    }

    // Obtiene al usuario que pegó el JwtStrategy en el request
    const req = contexto.switchToHttp().getRequest<{ user: PayloadJwt }>();
    const usuario = req.user;

    // Si el rol del usuario está dentro de los permitidos, da acceso
    if (usuario && rolesPermitidos.includes(usuario.rol)) {
      return true;
    }

    // Si el usuario no tiene el rol necesario: 403 Forbidden
    throw new ForbiddenException(
      'No tienes los permisos necesarios para realizar esta acción',
    );
  }
}
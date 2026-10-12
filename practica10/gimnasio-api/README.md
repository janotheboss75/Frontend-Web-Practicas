PARTE 1: BLINDAR LA API

1.- ¿por qué el filtro atrapa la clase base y no cada error por separado?
    Por que NestJS va capturar cualquier excepción que sea una instancia de ErrorDeDominio o de cualquier clase que la herede, y esto sirve para definir un solo punto de entrada para toda la jerarquía evita duplicar código o tener múltiples filtros haciendo lo mismo.

2.- ¿por qué este middleware no podría decidir si un usuario tiene permiso para una ruta? 
    El middleware se ejecuta en la capa HTTP de Express antes de que NestJS determine qué controlador o qué método específico va a atender la petición. No tiene acceso al Reflector ni a los metadatos decorados en los controladores.

3.- ¿por qué la petición que responde 409 no aparece en ese registro?
    Al emitirse una notificación de error, el flujo omite el callback del tap y transfiere el control directamente al DominioExceptionFilter

4.- ¿por qué este cambio rompe a cualquier cliente que ya estuviera usando la API?
    Por que la respuesta deja de ser res[0] pasa a ser res.data[0]

5.- ¿quién bloquea y a quién protege?
     El que bloquea es el navegador web y protege al usuario final de la aplicación web


PARTE 2: AUTENTICACION JWT Y OPEN API

1.- ¿por qué el campo se llama passwordHash y no password?
    Para no olvidar que en la bd se guardara la contraseña hasheada

2.- ¿por qué los dos errores del inicio de sesión dicen exactamente lo mismo?
    Si fueran distintos, cualquiera averigua que correos existen probando uno por uno.

3.-  ¿qué es lo que protege la firma?
    si un cliente o un atacante intenta modificar algún dato en el payload (por ejemplo, cambiar "rol": "miembro" por "rol": "admin" para escalar privilegios), la firma digital romperá su validez.

4.- ¿por qué es más seguro proteger todo y abrir a mano, que al revés?
    Por que olvidar proteger una ruta, deja un hueco que nadie ve, y es mas dificil detectarlo.

5.- ¿cuál es la diferencia entre un 401 y un 403?
    El 401 es cuando el servidor no sabe quien es el usuario y el 403 es cuando el usuario no tiene permisos.

7.- ¿cuántas líneas del AuthService tuvieron que cambiar para pasar de memoria a MySQL? ¿Por qué? 
    Cero lineas, El AuthService depende de una abstracción (la interfaz o contrato UsuarioRepository y su token de inyección USUARIO_REPOSITORY), en lugar de depender de una implementación concreta (como UsuarioMemoriaRepository o UsuarioPrismaRepository).

8.- ¿por qué es importante tomar al usuario de los claims del token y no de un parámetro de la URL o del cuerpo?
    Los datos que viajan en los parámetros de la URL o en el cuerpo de la petición provienen directamente de la entrada del usuario y pueden ser modificados libremente por el cliente, y al extraer la identidad directamente de los claims del token JWT (o al usar el token como la "fuente de verdad" para validar lo que viene en el cuerpo/URL), el servidor garantiza que las acciones se ejecuten únicamente dentro del contexto de permisos del usuario autenticado.










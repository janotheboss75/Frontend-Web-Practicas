## Práctica 17
1.- Ejercicio 1: mis inscripciones, sólo con sesión
    1.1.-¿la ruta protegida hace segura la aplicación?
        No. La ruta protegida en el frontend (React, Angular, Vue, etc.) es únicamente una mejora de UX (Experiencia de Usuario). Evita que un usuario navegue a pantallas donde no debería ver la interfaz, pero no ofrece seguridad real. Cualquier usuario puede manipular el código cliente, saltarse la redirección o inspeccionar el JS.
    1.2.- ¿Qué es lo que de verdad protege los datos?
        La seguridad real recae en la validación de autenticación y autorización en cada endpoint del servidor. Si la API deniega el acceso sin un token válido, los datos jamás saldrán de la base de datos hacia el cliente.

2.- Ejercicio 2: inscribirse y el 401
 2.1.- ¿por qué no se manda el miembroId al inscribirse?
    El miembroId se extrae directamente en el servidor a partir del JWT recibido en las cabeceras (Authorization: Bearer <token>).

 2.2.- ¿qué diferencia hay entre un 401 y un 403?
    El 401 es no autenticacion cuando 3l cliente no envió token, el token expiró o es inválido. La API no sabe quién es el usuario. y el 403 es cuando la API reconoce quién es el usuario, pero este no posee el rol o permisos necesarios.



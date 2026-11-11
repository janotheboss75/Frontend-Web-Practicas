## Practica 16

1.- ¿Por qué se usa un Contexto de React y no props para manejar la sesión del usuario?
- Porque la información de la sesión son un estado global que necesitan componentes distribuidos en distintos niveles de la aplicación. Si se intentara compartir mediante props tendríamos que pasar los datos manualmente con componentes intermedios que no los necesitan. El Contexto permite inyectar y consumir la sesión directamente donde se requiera.

2.- ¿Qué pasa si un componente intenta usar el hook de sesión fuera de su Provider correspondiente?
- Lanzará un error de React indicando que el contexto es undefined. Esto ocurre porque el componente está intentando consumir un estado global que no está envuelto ni disponible en el DOM por el proveedor del contexto.

3.- ¿Dónde se guarda el token JWT y qué riesgo de seguridad tiene ese almacenamiento?
- El token se almacena en el localStorage del navegador. Y el principal riesgo de seguridad es que cualquier script malicioso que logre inyectarse en la aplicación mediante un ataque XSS puede leer y extraer el contenido del localStorage sin problemas comprometiendo las credenciales y el acceso a la API.

4.- ¿Cómo se comprueba que el token viaja correctamente en las peticiones y qué muestra jwt.io?
- En la pestaña Red: al realizar una petición protegida hacia la API, se puede ver la cabecera HTTP de la petición y verificar la presencia del encabezado Authorization: Bearer <token>.
Y al decodificar el token en la plataforma jwt.io se puede inspeccionar.


Wilber Valdez Quintero.
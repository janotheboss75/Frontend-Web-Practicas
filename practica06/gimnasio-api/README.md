1. ¿por qué esta interfaz no menciona Express, NestJS ni memoria?
  Por que esta interfaz lo unico que hace es definir los metodos para el quien la implementa, no ocupa nada mas

2. ¿qué palabra de esa clase es la que promete cumplir la interfaz del paso anterior? 
  la de implements

4. ¿por qué este archivo no sabe qué es una petición HTTP?
  Por que este es el que maneja las reglas de negocio, solo eso, ya en el controller, se le injecta el service para ahora si realizar las peticiones HTTP

5. ¿por qué el Service se inyecta sin token en el Controller, y el repositorio sí necesita uno?
  Por que el service si es una clase que el compilador de typescript no borra, en cambio el repository es una interfaz de typescript que si se borra.

6. ¿qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?
  al ejecutar las peticiones HTTP hacia las rutas originales de /inscripciones, el servidor sigue devolviendo los mismos códigos de estado (como 200 OK o 201 Created) y las mismas respuestas de datos JSON que entregaba en la Práctica 6.
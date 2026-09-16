1.- ¿qué generó el comando nest new?
    Una carpeta con todas las dependencias y estructura de un proyecto nest.js

2.-  ¿qué hace el AppService que ya viene generado?
    Es una clase que hace de service, donde viene un metodo llamado getHello() injectable y que retorna un 'Hola mundo'.

3.- ¿por qué la ruta funciona sin declarar nada en app.module.ts?
    La ruta funciona porque AppController ya se encuentra registrado previamente en el arreglo de controllers dentro del archivo app.module.ts

4.-  ¿qué pasaría si el cuerpo de la petición viniera vacío?
    El servidor responderá con código 201 Created devolviendo {} o un valor vacío.

5.- ¿en qué archivo vive hoy toda la lógica de la práctica?
    app.controller.ts

1. ¿qué pasaría si el módulo no quedara registrado en la raíz?
  el framework de NestJS ignorará por completo esa parte de tu código al levantar la aplicación.

2. ¿por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?
  Los métodos del repositorio devuelven promesas, incluso cuando los datos están en memoria, para mantener la abstracción de la base de datos y preparar tu código para el futuro.

  el día que conectes una base de datos mediante un ORM como TypeORM o Prisma, vas a tener que reescribir toda tu lógica de servicios para agregar async y await. Al tipar el retorno como Promise desde el principio, cuando cambies la fuente de datos, tu capa de servicio quedará intacta.

3. ¿qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?
   ERROR [ExceptionHandler] UnknownDependenciesException [Error]: Nest can't resolve dependencies of the InscripcionesService (?).

   Las clases son valores reales que se conservan cuando el código TypeScript se compila a JavaScript, al detectar que pides una clase concreta, el framework la reconoce inmediatamente, la utiliza como un identificador automático (token) y la inyecta sin que tengas que configurar nada más.

   Cuando NestJS intenta leer los parámetros de tu constructor en tiempo de ejecución, la interfaz ya no existe; en su lugar, el framework solo detecta un Object genérico.

4. ¿por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?
  El servicio necesita un token manual para el repositorio porque depende de una interfaz, mientras que el controlador no lo necesita para el servicio porque depende de una clase concreta.

6. ¿cuál es la diferencia entre un 400 y un 409?
  Error 400 (Bad Request): Significa que el servidor no entiende la petición debido a un problema en el formato o en la validación mínima de los datos de entrada.

  Error 409 (Conflict): Significa que el servidor entiende la petición perfectamente, pero procesarla choca con el estado actual del sistema.

7.  ¿por qué cambió el código de estado de esa última petición?



1. ¿Hizo falta una base de datos real para probar la regla de negocio? ¿Qué dice eso sobre para qué sirve el patrón Repository?
    No hizo falta, ya que se usaron listas en memoria, para almacenar los datos y poder hacer las pruebas, lo que nos dice es que el patron repository desacopla la bd de las reglas de negocio, por lo cual podemos cambiar de almacenamiento muy facilmente

2. El Service recibe el repositorio como Repository<Prestamo>, no InMemoryPrestamoRepository. ¿Qué se rompía si usaban la clase concreta? 
        Tanto se generaria un alto acomplamiento y se romperia la inversion de dependencias

3. Si cambiaran el Map en memoria por una base de datos real, ¿cuántos archivos tocarían? ¿Por qué tan pocos?
    Nomas el de repository, por que nomas seria cambiar la logica de los metodos para conseguir y manipular los datos y como el servicio esta referenciando solo la interfaz, al momento de cambiar ese archivo automaticamente tendra la nueva logica de base de datos, aparte de que utilizara la inversion de dependencias

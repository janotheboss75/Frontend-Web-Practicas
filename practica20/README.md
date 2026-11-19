1.- Ejercicio 1: el servicio del catálogo
    1.1.- ¿qué diferencia hay entre un signal y un computed, y cuál se parece a useState y cuál a useMemo?
        - signal() almacena un valor de estado base mutable (de lectura y   escritura).
        - computed() define un valor derivado de solo lectura que se calcula a partir de uno o más signal (u otros computed).
        - signal() se parece a useState y computed() se parece a useMemo

2.- Ejercicio 2: el filtro y el detalle
    2.1.- ¿qué pasa si el filtro hace new Catalogo() en lugar de inject(Catalogo)?
        Se crea una instancia completamente independiente y aislada del servicio, rompiendo el patrón Singleton de Angular (providedIn: 'root').
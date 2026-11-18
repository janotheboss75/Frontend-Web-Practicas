1.- Ejercicio 1: el proyecto y el tablero
    1.1.- ¿qué archivo de Angular hace el papel de main.tsx, de App.tsx y de vite.config.ts?
        El de main.tsx es el main.ts, el de app.tsx es el app.ts y el de vite.config.ts es angular.json

2.- Ejercicio 2: la tarjeta de una clase
    2.1.- ¿por qué clase() lleva paréntesis y para qué sirve track?
        En Angular, los signals son funciones envoltorio; invocar clase() con paréntesis ejecuta el getter de la señal para extraer su valor actual y permite que el sistema de reactividad de Angular rastree cuándo cambia ese dato para actualizar automáticamente el template y track le indica a Angular qué identificador único (por ejemplo clase.id) distingue a cada elemento de la lista.


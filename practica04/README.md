1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Qué tendrían que agregar en cada ruta si esto no fuera así?
    Tendrías que envolver todo el código dentro del handler async en un bloque try/catch y pasar explícitamente el error capturado a la función next(error)

2. ¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?
    Debido al principio de separación de responsabilidades y la desacoplación del dominio

3. Si mañana agregaran una app móvil que también consume esta API, ¿qué archivos de esta práctica tendrían que tocar?
    No tendrían que modificar absolutamente ningún archivo existente de la práctica, nomas lo del CORS


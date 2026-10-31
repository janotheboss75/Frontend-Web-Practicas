1.- Ejercicio 1: el router y el catálogo
    1.1.- ¿por qué el 404 sí tiene encabezado y pie?
        El error 404 conserva el encabezado (header) y el pie de página (footer) porque su ruta (<Route path="*"/>) se define anidada dentro de la ruta del Layout compartido.

    1.2.- ¿qué cambia en la pestaña Red si usas <a href> en lugar de Link? Muéstralo con capturas
        El navegador desecha la aplicación actual y realiza una recarga completa de la página.

2.- Ejercicio 2: el detalle de una clase
    2.1.- ¿en qué tipo de dato llega el id de la URL y qué pasa si no lo conviertes?
        El id que extraes con useParams siempre llega como un string (cadena de texto), incluso si en la URL se ve como un número (ej. "1"). Si no lo conviertes a número (usando Number(id) o parseInt(id)) y haces una comparación estricta (===) en tu frontend contra un número, la búsqueda fallará (porque "1" === 1 es false) y no encontrará la clase.

    2.2.- ¿qué pasa al ir de /clases/1 a /clases/2 si el id no está en las dependencias del efecto?
        El componente no actualizará su información. La URL cambiará en la barra de direcciones a /clases/2, pero como el id no está en el arreglo de dependencias del useEffect, React no volverá a ejecutar la petición al backend. Seguirás viendo en pantalla los datos de la clase 1.


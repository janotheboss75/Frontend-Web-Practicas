1.- Ejercicio 1: traer los productos de la API
    1.1.- ¿por qué en la pestaña Red salen dos peticiones al cargar?
        Cuando trabajas en entorno de desarrollo con <React.StrictMode>, React ejecuta los efectos (useEffect) dos veces intencionalmente al montar el componente. Lo hace para ayudarte a detectar efectos secundarios mal implementados o falta de funciones de limpieza.
    
    1.2.- ¿qué pasa si quitas el arreglo de dependencias del efecto? 
        El efecto se ejecutará después de cada renderizado del componente, verás una ráfaga ininterrumpida e infinita de peticiones HTTP GET dirigidas a la API.

2.0.- Ejercicio 2: el pago simulado
    2.1.- ¿qué hace e.preventDefault() y qué pasa si lo quitas?
        Es un método del objeto de evento (Event) que cancela el comportamiento predeterminado que el navegador ejecuta de forma nativa ante determinada acción del usuario.

        En el contexto de un formulario (<form onSubmit={handleSubmit}>), la acción por defecto del navegador al presionar el botón de envío (o pulsar Enter) es capturar los campos, realizar una petición HTTP (usualmente GET o POST) y recargar la página completa para procesar la respuesta. Al invocar e.preventDefault(), le indicas al navegador: "Detente, yo me encargo de procesar este envío mediante código JavaScript/React".

        Si no se pone, el navegador intentará enviar el formulario por su cuenta y recargará la página por completo.

        Al recargarse la aplicación, todo el estado en memoria de React se reinicia a sus valores iniciales. Esto significa que:
            - El carrito se borra (si vive en el estado local o React Context).
            - El formulario se limpia antes de que la petición asíncrona a la   API  termine.
            - La petición asíncrona (fetch / axios) se cancela, ya que el navegador descarga la página actual para cargar la nueva URL.
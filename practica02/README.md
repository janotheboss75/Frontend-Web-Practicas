2.- DOMINIO
    Responder: ¿por qué una unión de valores y no una enumeración?
    Por que las uniones de tipos desaparecen al compilar a JavaScript, lo que lo hace mas ligero al compilar, a su vez que nos ayuda en el autocompletado del editor con union, y podemos utilizar los valores en runtime.

3.- DUANA
    Responder: ¿qué se gana con el tipo desconocido en lugar del que acepta todo?
    Te obliga a escribir una validación estricta antes de usar los datos, mientras que any simplemente ignora el peligro y puede tronar muy facil en tiempo de ejecucion, y de la otra manera aseguras los casos en los que mandas datos erroneos.

4.- MOSTRADOR
    Responder: ¿por qué la fecha entra como parámetro?
    Por que nos sirve para poder testear la funcion poniendo la fecha que nosotros querramos.
1.- ¿por qué el Layout no necesita saber que es una tienda?
  Por que solo definira la estructura que todas las paginas de la aplicacion tendra, a su vez que ya tiene un parametro de entrada que se llama encabezado, y lo hace dinamico a poder ponerle cualquier cosa.

2.- ¿qué pasa si escribes onClick={onAgregar(producto)} sin la flecha?
    Va a tirar el error de "El tipo 'void' no se puede asignar al tipo 'MouseEventHandler<HTMLButtonElement> | undefined'"", ya que el onClick espera un objeto de MouseEventHandler

3.- ¿por qué con carrito.push(...) el contador no se mueve y no sale ningún error?
  Porque push es un método completamente válido. La sintaxis es correcta y JavaScript ejecuta la instrucción sin problema agregando el nuevo elemento al arreglo en memoria y el contador no se actualiza por un problema de referencia de memoria e inmutabilidad.


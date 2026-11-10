# Practica 16

### ¿Por que se usa un contexto y no props para la sesion?
Se usa contexto porque la sesion necesita estar disponible en cualquier componente sin tener que hacer *prop drilling* (que tenga que pasar por props a treves de cada nivel de la jerarquia de componentes). El contexto permite compartir **usuario**, **entrar**, **registrar** y **salir** diretamente.

### ¿Que pasa si un componente usa la sesion fuera de un proveedor?
Si `useSesion()` se usa fuera de `<ProveedorSesion>`, lanza un error: `useSesion() tiene que usarse dentro de <ProveedorSesion>`

### ¿Donde se guarda el token y que riesgo tiene ese lugar?
El token se guarda en **localStorage**. El riesgo es que **localStorage** es accesible para cualquier script en la pagina, lo que lo hace vulnerable a ataques XSS que podrian robar el token.
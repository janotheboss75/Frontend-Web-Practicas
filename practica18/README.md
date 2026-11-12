## Practica 18

1.- ¿Cuánto se ahorró en el build al usar React.lazy y por qué el ahorro en la carga inicial es pequeño en esta aplicación?
- El ahorro en la carga inicial del archivo JavaScript principal normalmente es de tan solo unos pocos kilobytes. Y la razón por la cual este ahorro es pequeño en esta aplicación es que la practica cuenta con pocos componentes, por eso el volumen de código separado en chunks independientes es poco en comparación con aplicaciones empresariales.

2.- ¿Por qué falla la comunicación con la API si el comando vite preview se ejecuta por defecto en el puerto 4173 en lugar del puerto 5173?
- Falla por un problema de CORS o porque el entorno del backend y las configuraciones de origen del navegador están estrictamente asociadas o configuradas para atender peticiones originadas desde el puerto local 5173. Y al correr el preview en el puerto 4173, el origen de la aplicación cambia y la API rechaza o bloquea las solicitudes o credenciales compartidas si no está autorizado.

3.- ¿Cuándo conviene utilizar la API de Contexto Context y cuándo es preferible utilizar un store de Zustand?
- Context conviene cuando: se manejan estados globales sencillos, estables o que cambian con muy poca frecuencia, donde la sobrecarga de instalar librerías externas no se justifica.

- Zustand conviene cuando: se requiere un estado global complejo, con alto rendimiento, múltiples acciones de actualización frecuentes, consultas derivadas y cuando muchos componentes independientes necesitan suscribirse a porciones específicas del estado.



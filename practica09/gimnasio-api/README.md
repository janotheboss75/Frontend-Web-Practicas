1. ¿qué línea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?
  Tuve que cambiar el useClass del token de cada uno en las clases Module.

2. ¿por qué InscripcionesService no tuvo que cambiar ni una línea de las reglas de cupo y duplicados?
  Por que el inscripcionesService nomas valida, y no le interesa en donde se esta guardando la informacion.

3. ¿por qué una interfaz no puede validar nada en tiempo de ejecución?
  Las interfaces de TypeScript son un concepto puramente en tiempo de compilación y desaparecen por completo al transpilar a JavaScript. Como en tiempo de ejecución no existe ningún código de la interfaz, no hay lógica ni metadata que pueda ejecutar comprobaciones sobre los datos entrantes.

4. ¿qué código de estado responde y qué trae en el cuerpo?
  4.1 Enviar un cuerpo con el tipo equivocado y anotar la respuesta:
   HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Vary: Origin
    Access-Control-Expose-Headers: Location,X-Request-Id
    Content-Type: application/json; charset=utf-8
    Content-Length: 134
    ETag: W/"86-HJnlxbnyALWUZ6i/FffdLKlxa+8"
    Date: Mon, 05 Oct 2026 02:12:37 GMT
    Connection: close

    {
      "message": [
        "nombre must be shorter than or equal to 80 characters",
        "nombre must be a string"
      ],
      "error": "Bad Request",
      "statusCode": 400
    }

  4.2 Enviar un cuerpo con un campo que no existe en el DTO
        HTTP/1.1 400 Bad Request
    X-Powered-By: Express
    Vary: Origin
    Access-Control-Expose-Headers: Location,X-Request-Id
    Content-Type: application/json; charset=utf-8
    Content-Length: 89
    ETag: W/"59-kQfPDCUwlMC5mcYSTR8p9K7CWN4"
    Date: Mon, 05 Oct 2026 02:14:08 GMT
    Connection: close

    {
      "message": [
        "property hackeame should not exist"
      ],
      "error": "Bad Request",
      "statusCode": 400
    }

   4.3 ¿qué código de estado responde y qué trae en el cuerpo? Bad Request, y en el cuerpo trae un mensaje y el status del error.

5.  ¿cuántas líneas quedó más corto el controlador?
  se le quitaron como 10 lineas

6. ¿quién bloquea realmente y a quién protege?
  El servidor procesa la petición HTTP normalmente y envía la respuesta junto con las cabeceras CORS. Es el navegador el que inspecciona esas cabeceras  y, si el origen desde el que se hizo la solicitud no está permitido, impide que el código JavaScript de la página web acceda a los datos de la respuesta y progege al usuario


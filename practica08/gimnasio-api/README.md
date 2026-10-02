1. ¿por qué el paquete del adaptador se llama adapter-mariadb si usamos MySQL?
  Aunque estés usando MySQL, este adaptador funciona perfectamente para ambos motores de base de datos. Esto se debe a que MariaDB es una bifurcación (fork) directa de MySQL y ambas bases de datos comparten el mismo protocolo de conexión de red subyacente.

2. ¿editar schema.prisma cambió algo en la base de datos antes de migrar?
  No. El archivo schema.prisma es un archivo de configuración en tu proyecto de Node.js.

3. ¿la carpeta de migraciones es una foto del esquema o un historial?
  Es un historial

4. ¿por qué Horario.clase sí crea columna y Clase.horarios no?
  Por que en horarios se crea un campo de claseId y se dice explicitamente con el codigo de "clase Clase @relation(fields: [claseId], references: [id])", que la relacion se guarde con una columna id en horario.

6. ¿de dónde sale la relación de muchos a muchos entre Miembro y Horario, si nunca se declaró?
  Por que la tabla de subscripcion se convierte en la tabla intermedia entre estas dos tablas al poner tanto el idClase como el idHorario




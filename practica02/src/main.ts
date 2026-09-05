import { cargarCatalogo } from "./catalogo.js";
import { disponiblesDe, multaDe, estadoDe, prestar, type Mostrador } from "./dominio/prestamos.js";
import { LibroNoEncontradoError, SinEjemplaresError } from "./dominio/tipos.js";
import { pedirOpcion, pedirTexto } from "./entrada.js";

const OPCIONES = [
    {valor: 'prestar', etiqueta: 'Prestar un libro'},
    {valor: 'catalogo', etiqueta: 'Ver catalogo'},
    {valor: 'prestamos', etiqueta: 'Ver prestamos'},
    {valor: 'salir', etiqueta: 'Salir'},
] as const;

type Opcion = (typeof OPCIONES)[number]['valor'];

function esOpcion(valor: string): valor is Opcion {
    return OPCIONES.some((o) => o.valor === valor);
}

const fecha = (d: Date) => d.toISOString().slice(0,10); // YYYY-MM_DD

function verCatalogo(m: Mostrador): void {
    console.log('\n Catalogo de libros');

    for(const l of m.libros){
        const disponibles = disponiblesDe(m,l);
        console.log(`- ${l.titulo} (${l.autor} ${l.anio ?? 's/a'}) - ${disponibles} ejemplares disponibles`); 
    }
    console.log('');
}

function verPrestamos(m: Mostrador, hoy: Date): void{
    console.log('\n Prestamos:');

    for(const p of m.prestamos){
        const estado = estadoDe(p,hoy);
        const multa = multaDe(p, estado, hoy);
        console.log(`- ${p.folio} - Libro: ${p.libroId} - Socio: ${p.socio} - Vence: ${fecha(p.venceEn)} - Estado: ${estado} - Multa: $${multa}`);
    }
}

async function hacerPrestamo(m: Mostrador, hoy: Date): Promise<void> {
    const libroId = await pedirTexto('Ingrese el ID del libro a prestar:');
    if(libroId === undefined){
        console.log('No se ingreso un ID valido.');
        return;
    }

    const socio = await pedirTexto('Ingrese el nombre del socio:')
    if(socio === undefined){
        console.log('No se ingreso un nombre de socio valido.');
        return;
    }

    try{
        const p = prestar(m, libroId.toUpperCase(), socio, hoy);
        console.log(`Prestamo realizado con exito. Folio: ${p.folio}, vence el ${fecha(p.venceEn)}`);
    } catch(error) {
        if(error instanceof LibroNoEncontradoError || error instanceof SinEjemplaresError) {
            console.log(`Error: ${error.message}`);
        } else{
            console.log('Ocurrio un error inesperado al realizar el prestamo.')
        }
    }
}

async function main(): Promise<void> {
    const { libros, descartados } = cargarCatalogo('datos/catalogo.json');

    console.log( '\n ---- MOSTRADOR DE LABIBLIIOTECA ----');
    console.log(`Se cargaron ${libros.length} libros del catálogo.\n`); 

    if (descartados > 0) {
        console.log(`Se descartaron ${descartados} entradas inválidas del catálogo por venir mal formados.\n`);
    }

    const hoy = new Date();
    const m: Mostrador = { libros, prestamos: [] };
    
    for (;;) {
        const elegido = await pedirOpcion('Seleccione una opción:', OPCIONES);

        if (elegido === undefined || !esOpcion(elegido)) { // FALTABA ESTA VALIDACION, SIN ELLA EL PROGRAMA FALLA, RECUERDEN LAS VALIDACIONES POR NARROWING.
            console.log('No se seleccionó una opción válida. Intente de nuevo.');
            return;
        }

        switch (elegido) {
            case 'prestar':
                await hacerPrestamo(m, hoy);
                break;
            case 'catalogo':
                verCatalogo(m);
                break;
            case 'prestamos':
                verPrestamos(m, hoy);
                break;
            case 'salir':
                console.log('Saliendo del programa.');
                return;
            default: {
                const _exhaustivo: never = elegido;
                throw new Error(`Opción no manejada: ${_exhaustivo}`);
            }
                
        }
    }
}

void main();
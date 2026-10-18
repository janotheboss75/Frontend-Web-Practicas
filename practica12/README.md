1.- Ver qué hace el compilador con el JSX
    1.1 Intentar compilarlo sin configuración y anotar el error
                × Expression expected
        ╭─[Componente.jsx:5:1]
        2 │ 
        3 │ export function MiBoton() {
        4 │   return (
        5 │     <div className="contenedor">
        ·     ─
        6 │       <h1>Hola desde JSX</h1>
        7 │       <button onClick={() => alert('¡Clic!')}>Haz clic aquí</button>
        7 │     </div>
        ╰────
        × Expected ',', got 'ident'
        ╭─[Componente.jsx:5:1]
        2 │ 
        3 │ export function MiBoton() {
        4 │   return (
        5 │     <div className="contenedor">
        ·          ─────────
        6 │       <h1>Hola desde JSX</h1>
        7 │       <button onClick={() => alert('¡Clic!')}>Haz clic aquí</button>
        7 │     </div>
        ╰────


        Caused by:
            Syntax Error
        Error: Failed to compile 1 file with swc.
            at Object.assertCompilationResult (C:\Users\janot\Desktop\Frontend-Web-Practicas\practica12\prueba-swc\node_modules\@swc\cli\lib\swc\util.js:140:15)
            at files (C:\Users\janot\Desktop\Frontend-Web-Practicas\practica12\prueba-swc\node_modules\@swc\cli\lib\swc\file.js:196:18)
            at async default_1 (C:\Users\janot\Desktop\Frontend-Web-Practicas\practica12\prueba-swc\node_modules\@swc\cli\lib\swc\file.js:213:9)

    1.2 ¿en qué se convirtió cada etiqueta del JSX?
        En modo clasico cada etiqueta HTML se convirtió en una llamada a la función React.createElement(), y en modo automatico las etiquetas se convirtieron en llamadas a una función interna llamada _jsx(), importada automáticamente desde 'react/jsx-runtime'.

    1.3.- si React es «sólo una biblioteca», ¿quién traduce el JSX?
        React es únicamente una biblioteca de JavaScript que proporciona las funciones para manejar componentes, el estado y el Virtual DOM en tiempo de ejecución,quien traduce el JSX es el compilador / transpilador en este caso SWC, o alternativas como Babel o TypeScript/tsc.

3.- «Hola mundo» sin JSX
    3.1.- ¿qué hace createRoot y qué hace render?
        createRoot recibe un elemento HTML del DOM real y crea un punto de entrada o raíz de React y render se encarga de tomar la estructura de elementos de React (sean creados mediante React.createElement o sintaxis JSX) y transformarlos en nodos reales del DOM, dibujándolos físicamente en la pantalla dentro del navegador.

4.- El primer componente
    4.1.- Quitar la prop obligatoria y anotar el error que muestra el editor
        La propiedad "nombre" falta en el tipo "{}", pero es obligatoria en el tipo "SaludoProps".ts(2741)

    4.2.- ¿por qué el nombre de un componente empieza con mayúscula?
        los componentes deben empezar con mayúscula (PascalCase) para que el compilador de JSX pueda diferenciar entre etiquetas HTML nativas y componentes personalizados.

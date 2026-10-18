import React from 'react';

export function MiBoton() {
  return (
    <div className="contenedor">
      <h1>Hola desde JSX</h1>
      <button onClick={() => alert('¡Clic!')}>Haz clic aquí</button>
    </div>
  );
}
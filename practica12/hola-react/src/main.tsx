import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
import React from 'react';
import { createRoot } from 'react-dom/client';

const holaMundo = React.createElement(
  'div',
  null,
  React.createElement('h1',null,'HOLA NODE')
);

const tarjeta1 = React.createElement(
  'div',
  { style: { border: '2px solid #007acc', padding: '16px', borderRadius: '8px', maxWidth: '300px' } },
  React.createElement('h2', null, 'Tarjeta1'),
  React.createElement('p', null, 'Esta es la descripción dentro de la tarjeta construida sin JSX.'),
  React.createElement('button', { onClick: () => alert('¡Hiciste clic!') }, 'Aceptar')
);

const tarjeta2 = React.createElement(
  'div',
  { style: { border: '2px solid #007acc', padding: '16px', borderRadius: '8px', maxWidth: '300px' } },
  React.createElement('h2', null, 'Tarjeta2'),
  React.createElement('p', null, 'Esta es la descripción dentro de la tarjeta construida sin JSX.'),
  React.createElement('button', { onClick: () => alert('¡Hiciste clic!') }, 'Aceptar')
);

const tarjeta3 = React.createElement(
  'div',
  { style: { border: '2px solid #007acc', padding: '16px', borderRadius: '8px', maxWidth: '300px' } },
  React.createElement('h2', null, 'Tarjeta3'),
  React.createElement('p', null, 'Esta es la descripción dentro de la tarjeta construida sin JSX.'),
  React.createElement('button', { onClick: () => alert('¡Hiciste clic!') }, 'Aceptar')
);

const app = React.createElement(
  'div',
  null,
  holaMundo,
  tarjeta1,
  tarjeta2,
  tarjeta3
);

// 2. Seleccionamos el elemento del HTML real (en index.html hay un <div id="root"></div>)
const contenedorDOM = document.getElementById('root')!;

// 3. Usamos createRoot para inicializar el contenedor
const root = createRoot(contenedorDOM);

// 4. Usamos render para dibujar la tarjeta en pantalla
root.render(app);
*/
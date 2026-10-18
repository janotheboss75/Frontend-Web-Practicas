import {Saludo} from "./Saludo.tsx";
import { TarjetaPerfil } from "./TarjetaPerfil.tsx";

export default function app() {
  return (
    <main className="App">
      <Saludo nombre="ISW"/>

      <section className="equipo">
        <TarjetaPerfil nombre="Juan Perez" carrera="Ingenieria en Sistemas" semestre={5}/>
        <TarjetaPerfil nombre="Maria Garcia" carrera="Ingenieria en Computacion" semestre={4}/>
        <TarjetaPerfil nombre="Carlos Lopez" carrera="Ingenieria en Electronica" semestre={3}/>
      </section>
    </main>
  );
}


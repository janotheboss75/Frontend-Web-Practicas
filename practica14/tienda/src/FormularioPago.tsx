import {useState, type FormEvent} from "react";
import {pesos} from "./datos.ts"

interface FormularioPagoProps {
    total: number;
    onPagar: (correo: string, telefono: string) => Promise<void>;
}

export function FormularioPago({total, onPagar}: FormularioPagoProps) {
    const [correo,setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function enviar(e: FormEvent) {
        e.preventDefault();
        if(!correo.includes("@")) return setError("Escribe un correo valido");
        if(!/^\d{10}$/.test(telefono)) return setError("Escribe un telefono valido");

        setError(null);
        setEnviado(true);

        try {
            await onPagar(correo, telefono);
        } catch (e) {
            setError(e instanceof Error ? e.message : "No se pudo completar el pago");
        } finally {
            setEnviado(false);
        }
    }

    return (
        <form className="pago" onSubmit={enviar}>
            <h2>Total a pagar: {pesos.format(total)}</h2>
            <label>Correo electronico:</label>
            <input 
                type="email" 
                value={correo}
                onChange={(e) => setCorreo(e.target.value)} 
            />
            <label>Telefono:</label>
            <input 
                type="tel" 
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            {error && <p className="pago_error">{error}</p>}
            <button type="submit" disabled={enviado}>
                {enviado ? "Enviado..." : "Pagar"}
            </button>
        </form>
    )
}
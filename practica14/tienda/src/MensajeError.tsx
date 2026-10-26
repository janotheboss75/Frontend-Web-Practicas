interface MensajeroErrorProps {
    mensaje: string;
    onReintentar: () => void;
}

export function MensajeError({mensaje, onReintentar}: MensajeroErrorProps) {
    return (
        <div className="error">
            <p>{mensaje}</p>
            <button onClick={onReintentar}>Reintentar</button>
        </div>
    );
}
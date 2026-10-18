import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function MiBoton() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "contenedor",
        children: [
            /*#__PURE__*/ _jsx("h1", {
                children: "Hola desde JSX"
            }),
            /*#__PURE__*/ _jsx("button", {
                onClick: function onClick() {
                    return alert('¡Clic!');
                },
                children: "Haz clic aqu\xed"
            })
        ]
    });
}


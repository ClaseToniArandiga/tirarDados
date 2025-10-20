// WEBapp: Simulador de Dados (MVP)
// Versión: 1.0
// MVP = Producto Mínimo Viable = Tirar dado 6 caras

// Objeto DADO
let dado = {
    // Propiedades
    cantosRedondeados: true,
    material: ["plástico", "madera", "metal", "resina"],
    color: "blanco",
    opacidad: 1,
    caras: [4, 6, 8, 10, 12, 20, 100],
    grabado: false,
    tamano2: {
        ["pequeño"]: "2cm",
        ["standard"]: "3cm",
        ["grande"]: "5cm",
    },
    peso: ["ligero", "standard", "pesado"],
    marca: [
        "Hasbro",
        "Chessex",
        "Koplow",
        "GameScience",
        "WizDice",
        "Q-Workshop",
        "Die Hard Dice",
    ],
    // Métodos
    tirar: function (caras = 6) {
        // si las caras no coinciden con las caras definidas en la propiedad caras, devolver un mensaje de error
        if (!this.caras.includes(caras)) {
            return "Error: El dado no tiene " + caras + " caras.";
        }
        return Math.floor(Math.random() * caras) + 1;
    },
};

// Conexiones con HTML
const zonaDado = document.getElementById("zonaDado"); // <div></div>



// Botón para tirar el dado
zonaDado.addEventListener("click", function () {
    // tirarDado();
    const resultado = dado.tirar();
    zonaDado.children[0].textContent = resultado;
    // rotación del zonaDado
    zonaDado.style.transform = "rotate(" + (Math.random() * 90) + "deg)";
});

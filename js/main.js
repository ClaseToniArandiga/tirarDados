// Encontrar con los ID del HTML
const zonaDado = document.getElementById("zonaDado")
const boton = document.getElementById("boton")


// Función que se encarga de enseñar el resultado del dado en el HTML
function tirarDado() {
    // Llamar a la función dadoDeSeis para obtener el resultado
    const resultado = dadoDeSeis();
    // insertar un CSS en una etiqueta HTML ID zonaDado

    // Creación de un constante Mapa, de todos los valores de posición del dado
    const posicionesDado = new Map([
        [1, "0px center"],
        [2, "-350px center"],
        [3, "-700px center"],
        [4, "-1050px center"],
        [5, "-1400px center"],
        [6, "-1750px center"]
    ]);

    // Comparar el resultado si es igual que el key del Mapa y insertar el value en el CSS de zonaDado
    if (posicionesDado.has(resultado)) {
        zonaDado.style.backgroundPosition = posicionesDado.get(resultado);
    }



    // Función que ella sola, ejecute al llamarla una tirada de dados de 6 caras
    function dadoDeSeis() {
        // Generar un número aleatorio entre 1 y 6
        const resultado = Math.floor(Math.random() * 6) + 1;
        return resultado
    }
}


// Pulsar el boton y que se ejecute la función
boton.addEventListener("click", function () {
    tirarDado()
})

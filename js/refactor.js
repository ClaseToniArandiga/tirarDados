// Refactor 29/10/2025:
// Construir clase Dado de 6 caras
// Crear Herencia para los otros dados, 4, 8, 10, 12, 20, 100 caras

// Clase Dado 6 caras
class DadoBasico{
    constructor(tamano = "básico", material, cantosRedondeados = true){
        this.caras = 6;
        this.color = "blanco";
        this.colorLetra = "negro";
        this.tamano = tamano;
        this.material = material;
        this.cantosRedondeados = cantosRedondeados;
    }

    // Método para tirar el dado
    tirar(){
        return Math.floor(Math.random() * this.caras) + 1
    }
}

// Clase Herencia para el dado de 4 caras
class Dado4caras extends DadoBasico{
    constructor(tamano, material, cantosRedondeados){
        super(tamano, material, cantosRedondeados);
        this.caras = 4;
        this.color = "verde";
        this.colorLetra = "blanco";
    }
}

// Clase Herencia para el dado de 8 caras
class Dado8caras extends DadoBasico{
    constructor(tamano, material, cantosRedondeados){
        super(tamano, material, cantosRedondeados);
        this.caras = 8;
        this.color = "morado";
        this.colorLetra = "negro";
    }
}

// Clase Herencia para el dado de 10 caras
class Dado10caras extends DadoBasico{
    constructor(tamano, material, cantosRedondeados){
        super(tamano, material, cantosRedondeados);
        this.caras = 10;
        this.color = "turquesa";
        this.colorLetra = "negro";
    }
}

// Lógica para crear un dado y tirarlo


// Crear la nueva instancia del dado y tirarlo, cuando pulsamos la imagen del dado elegido
document.getElementById("dado6").addEventListener("click", function(){
    const dado6 = new DadoBasico("standard", "plástico", true);
    const resultado = dado6.tirar();
    // DOM, crear el dado que es un div, con un h1 dentro con el número
    // Crear el div del dado
    const divDado6 = document.createElement("div");
    divDado6.classList.add("dado","dado6");
    document.querySelector("main").appendChild(divDado6);
    // Crear el h1 del número
    const numeroDado6 = document.createElement("h1");
    numeroDado6.textContent = resultado;
    divDado6.appendChild(numeroDado6);
})

// SOLO tirar los dados que hay creado, tener un botón de tirar dados o mecanismo
document.getElementById("botonTirar").addEventListener("click", function(){
    const dados = document.querySelectorAll("h1");
    dados.forEach(function(h1DelDado){
        h1DelDado.textContent = Math.floor(Math.random() * 6) + 1;
    })
}); 

// Si hago un clic encima de un dado, y un dado es un div, ese div lo tengo que eliminar del DOM
document.querySelector("main").addEventListener("click", function(evento){
    if(evento.target.classList.contains("dado") || evento.target.parentElement.classList.contains("dado")){
        evento.target.remove();
    }
});
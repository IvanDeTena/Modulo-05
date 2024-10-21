
let puntuacion: number = 0;
let juegoTerminado: boolean = false;
const valoresCartas: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

// Puntuación actual
function muestraPuntuacion(): void {
    const puntuacionDiv = document.getElementById("puntuacionDiv");
    if (puntuacionDiv) {
        puntuacionDiv.innerHTML = "Puntuación: " + puntuacion;
    }
}

// Carta aleatoria
function dameCarta(): number {
    let indiceCarta: number = Math.floor(Math.random() * valoresCartas.length);
    return valoresCartas[indiceCarta];
}

// Mostrar carta
function muestraCarta(carta: number): void {
    const imagenesCartas: { [key: number]: string } = {
        1: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
        2: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
        3: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
        4: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
        5: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
        6: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
        7: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
        10: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
        11: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
        12: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
    };
    const cartaImg = document.getElementById("cartaImg") as HTMLImageElement;
    if (cartaImg) {
        cartaImg.src = imagenesCartas[carta];
    }
}

// Botón "Pedir Carta"
function pedirCarta(): void {
    if (juegoTerminado) {
        alert("El juego ha terminado. Inicia una nueva partida.");
        return;
    }
    
    const nuevaCarta: number = dameCarta();
    console.log("Carta recibida: ", nuevaCarta);
    muestraCarta(nuevaCarta);
    puntuacion += (nuevaCarta > 7 ? 0.5 : nuevaCarta);  // Suma la carta nueva
    muestraPuntuacion();
    verificaGameOver();
}

// Game Over
function verificaGameOver(): void {
    if (puntuacion > 7.5) {
        alert("¡Game Over! Has superado los 7.5 puntos.");
        terminarJuego();
    }
}

// Plantarse
function plantarse(): void {
    if (juegoTerminado) {
        alert("El juego ya ha terminado. Inicia una nueva partida.");
        return;
    }

    juegoTerminado = true;

    if (puntuacion < 4) {
        alert("Has sido muy conservador.");
    } else if (puntuacion === 5) {
        alert("Te ha entrado el canguelo eh?");
    } else if (puntuacion === 6 || puntuacion === 7) {
        alert("Casi casi...");
    } else if (puntuacion === 7.5) {
        alert("¡Lo has clavado! ¡Enhorabuena!");
    }

    terminarJuego();
}

// Final del juego
function terminarJuego(): void {
    juegoTerminado = true;
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn) {
        nuevaPartidaBtn.style.display = "inline";  // Botón nueva partida
    }
}

// Reiniciar partida
function nuevaPartida(): void {
    puntuacion = 0;
    juegoTerminado = false;
    muestraPuntuacion();
    const cartaImg = document.getElementById("cartaImg") as HTMLImageElement;
    if (cartaImg) {
        cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn) {
        nuevaPartidaBtn.style.display = "none";  // Ocultar botón nueva partida
    }
}

// Eventos
document.getElementById("pedirCartaBtn")?.addEventListener("click", pedirCarta);
document.getElementById("plantarseBtn")?.addEventListener("click", plantarse);
document.getElementById("nuevaPartidaBtn")?.addEventListener("click", nuevaPartida);
document.addEventListener("mostrarpuntuacion", muestraPuntuacion);

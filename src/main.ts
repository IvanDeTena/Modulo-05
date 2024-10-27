let puntuacion: number = 0;
const valoresCartas: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

// Puntuación actual
function muestraPuntuacion(): void {
    const puntuacionDiv = document.getElementById("puntuacionDiv");
    if (puntuacionDiv !== null && puntuacionDiv !== undefined && puntuacionDiv instanceof HTMLDivElement) {
        puntuacionDiv.innerHTML = "Puntuación: " + puntuacion;
    }
}

// Carta aleatoria
function dameCarta(): number {
    let indiceCarta: number = Math.floor(Math.random() * valoresCartas.length);
    return valoresCartas[indiceCarta];
}

// Mostrar la carta seleccionada en el HTML
function pintarCartaEnHTML(urlCarta: string): void {
    const cartaImg = document.getElementById("cartaImg");
    if (cartaImg !== null && cartaImg !== undefined && cartaImg instanceof HTMLImageElement) {
        cartaImg.src = urlCarta;
    }
}

// Devuelve los puntos de la carta (mayores a 7 valen 0.5)
function obtenerPuntosCarta(carta: number): number {
    return carta > 7 ? 0.5 : carta;
}

// Suma los puntos de la carta a la puntuación total
function sumarPuntos(puntos: number): void {
    puntuacion += puntos;
}

// Actualiza los puntos totales en la interfaz
function actualizarPuntuacionTotal(): void {
    muestraPuntuacion();
}

// Verifica si los puntos totales son iguales a 7.5 o si son mayores
function verificarPuntuacion(): void {
    if (puntuacion === 7.5) {
        mostrarMensajeEnHTML("¡Lo has clavado! ¡Enhorabuena! Has llegado a 7.5.");
        terminarJuego();
    } else if (puntuacion > 7.5) {
        mostrarMensajeEnHTML("¡Game Over! Has superado los 7.5 puntos.");
        terminarJuego();
    }
}

// Devuelve el mensaje basado en la puntuación al plantarse
function obtenerMensajePlantarse(puntos: number): string {
    if (puntos < 4) {
        return "Has sido muy conservador.";
    } else if (puntos === 5) {
        return "Te ha entrado el canguelo eh?";
    } else if (puntos === 6 || puntos === 7) {
        return "Casi casi...";
    } else if (puntos === 7.5) {
        return "¡Lo has clavado! ¡Enhorabuena!";
    }
    return "";
}

// Muestra el mensaje en el HTML
function mostrarMensajeEnHTML(mensaje: string): void {
    const mensajeDiv = document.getElementById("mensajeDiv");
    if (mensajeDiv !== null && mensajeDiv !== undefined && mensajeDiv instanceof HTMLDivElement) {
        mensajeDiv.innerHTML = mensaje;
    }
}

// Final del juego
function terminarJuego(): void {
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn !== null && nuevaPartidaBtn !== undefined && nuevaPartidaBtn instanceof HTMLButtonElement) {
        nuevaPartidaBtn.style.display = "inline";  // Mostrar botón de nueva partida
    }
}

// Botón "Pedir Carta"
function pedirCarta(): void {
    const nuevaCarta: number = dameCarta();
    console.log("Carta recibida: ", nuevaCarta);
    
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

    pintarCartaEnHTML(imagenesCartas[nuevaCarta]);  // Mostrar la imagen de la carta

    const puntosCarta: number = obtenerPuntosCarta(nuevaCarta);
    sumarPuntos(puntosCarta);  // Sumar los puntos
    actualizarPuntuacionTotal();  // Actualizar la puntuación en la interfaz
    verificarPuntuacion();  // Verificar si los puntos son 7.5 o más
}

// Plantarse
function plantarse(): void {
    const mensaje = obtenerMensajePlantarse(puntuacion);
    mostrarMensajeEnHTML(mensaje);
    terminarJuego();
}

// Reiniciar partida
function nuevaPartida(): void {
    puntuacion = 0;
    muestraPuntuacion();
    
    const cartaImg = document.getElementById("cartaImg");
    if (cartaImg !== null && cartaImg !== undefined && cartaImg instanceof HTMLImageElement) {
        cartaImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }

    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn !== null && nuevaPartidaBtn !== undefined && nuevaPartidaBtn instanceof HTMLButtonElement) {
        nuevaPartidaBtn.style.display = "none";  // Ocultar botón nueva partida
    }

    const mensajeDiv = document.getElementById("mensajeDiv");
    if (mensajeDiv !== null && mensajeDiv !== undefined && mensajeDiv instanceof HTMLDivElement) {
        mensajeDiv.innerHTML = "";  // Limpiar mensaje anterior
    }
}

// Eventos
document.getElementById("pedirCartaBtn")?.addEventListener("click", pedirCarta);
document.getElementById("plantarseBtn")?.addEventListener("click", plantarse);
document.getElementById("nuevaPartidaBtn")?.addEventListener("click", nuevaPartida);

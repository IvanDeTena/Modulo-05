let puntuacion: number = 0;
const valoresCartas: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

// Generar número aleatorio
function generarNumeroAleatorio(limite: number): number {
    return Math.floor(Math.random() * limite);
}

// Carta aleatoria
function seleccionarCarta(): number {
    return valoresCartas[generarNumeroAleatorio(valoresCartas.length)];
}

// Mensaje en el HTML
function actualizarHTML(id: string, contenido: string): void {
    const elemento = document.getElementById(id);
    if (elemento !== null && elemento !== undefined && elemento instanceof HTMLElement) {
        elemento.innerHTML = contenido;
    }
}

// Imagen de la carta en el HTML
function pintarCartaEnHTML(urlCarta: string): void {
    const cartaImg = document.getElementById("cartaImg");
    if (cartaImg !== null && cartaImg !== undefined && cartaImg instanceof HTMLImageElement) {
        cartaImg.src = urlCarta;
    }
}

// Puntos de la carta
function obtenerPuntosCarta(carta: number): number {
    return carta > 7 ? 0.5 : carta;
}

// Sumar puntos a la puntuación total
function sumarPuntos(puntos: number): void {
    puntuacion += puntos;
}

// Actualizar la puntuación en el HTML
function actualizarPuntuacionTotal(): void {
    actualizarHTML("puntuacionDiv", `Puntuación: ${puntuacion}`);
}

// Puntuación igual a 7.5 o mayor
function verificarPuntuacion(): void {
    if (puntuacion === 7.5) {
        mostrarMensajeEnHTML("¡Lo has clavado! ¡Enhorabuena! Has llegado a 7.5.");
        mostrarBotonNuevaPartida();
    } else if (puntuacion > 7.5) {
        mostrarMensajeEnHTML("¡Game Over! Has superado los 7.5 puntos.");
        mostrarBotonNuevaPartida();
    }
}

// Mensaje en el HTML
function mostrarMensajeEnHTML(mensaje: string): void {
    actualizarHTML("mensajeDiv", mensaje);
}

// Botón de nueva partida
function mostrarBotonNuevaPartida(): void {
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn !== null && nuevaPartidaBtn !== undefined && nuevaPartidaBtn instanceof HTMLButtonElement) {
        nuevaPartidaBtn.style.display = "inline";
    }
}

// Pedir una carta
function pedirCarta(): void {
    const nuevaCarta = seleccionarCarta();
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

    pintarCartaEnHTML(imagenesCartas[nuevaCarta]);

    const puntosCarta = obtenerPuntosCarta(nuevaCarta);
    sumarPuntos(puntosCarta);
    actualizarPuntuacionTotal();
    verificarPuntuacion();
}

// Plantarse y mostrar mensaje en HTML
function plantarse(): void {
    const mensaje = obtenerMensajePlantarse(puntuacion);
    mostrarMensajeEnHTML(mensaje);
    mostrarBotonNuevaPartida();
}

// Mensaje al plantarse
function obtenerMensajePlantarse(puntos: number): string {
    if (puntos <= 4) return "Has sido muy conservador.";
    if (puntos === 5) return "Te ha entrado el canguelo eh?";
    if (puntos === 6 || puntos === 6.5 || puntos === 7) return "Casi casi...";
    if (puntos === 7.5) return "¡Lo has clavado! ¡Enhorabuena!";
    return "";
}

// Reinicia la partida
function nuevaPartida(): void {
    puntuacion = 0;
    actualizarPuntuacionTotal();
    pintarCartaEnHTML("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
    mostrarMensajeEnHTML("");
    const nuevaPartidaBtn = document.getElementById("nuevaPartidaBtn");
    if (nuevaPartidaBtn !== null && nuevaPartidaBtn !== undefined && nuevaPartidaBtn instanceof HTMLButtonElement) {
        nuevaPartidaBtn.style.display = "none";
    }
}

// Eventos a botones si existen en el HTML
const btnPedirCarta = document.getElementById("pedirCartaBtn");
if (btnPedirCarta !== null && btnPedirCarta !== undefined && btnPedirCarta instanceof HTMLButtonElement) {
    btnPedirCarta.addEventListener("click", pedirCarta);
}

const btnPlantarse = document.getElementById("plantarseBtn");
if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.addEventListener("click", plantarse);
}

const btnNuevaPartida = document.getElementById("nuevaPartidaBtn");
if (btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.addEventListener("click", nuevaPartida);
}

// Botones de elección del usuario
let botonPiedra = document.getElementById('btn-piedra');
let botonPapel = document.getElementById('btn-papel');
let botonTijera = document.getElementById('btn-tijera');

// Botón para reiniciar el juego
let botonReiniciar = document.getElementById('boton-reiniciar-juego');

// Marcadores
let marcadorUsuario = document.getElementById('puntuacion-usuario');
let marcadorComputadora = document.getElementById('puntuacion-pc');
marcadorUsuario.textContent = 0;
marcadorComputadora.textContent = 0;

// Opciones de juego (botones)
let totalopciones = document.querySelectorAll('.btn');

// Asignar eventos a los botones de elección del usuario
botonPiedra.addEventListener('click', handleUserChoice);
botonPapel.addEventListener('click', handleUserChoice);
botonTijera.addEventListener('click', handleUserChoice);

// Asignar evento para el botón de reinicio (se agrega una sola vez)
botonReiniciar.addEventListener('click', resetGame);

function ComputerSelection() {
    const randomIndex = Math.floor(Math.random() * totalopciones.length);
    if (totalopciones[randomIndex].id === "btn-piedra") {
        return "rock";
    } else if (totalopciones[randomIndex].id === "btn-papel") {
        return "paper";
    } else if (totalopciones[randomIndex].id === "btn-tijera") {
        return "scissors";
    } else {
        console.log("Invalid choice");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return 0; // Empate
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        return 1; // Jugador gana
    } else {
        console.log("Computer wins!");
        return -1; // Computadora gana
    }
}

function handleUserChoice(event) {
    let userChoiceButton = event.currentTarget.id;
    let userChoice;
    if (userChoiceButton === "btn-piedra") {
        userChoice = "rock";
    } else if (userChoiceButton === "btn-papel") {
        userChoice = "paper";
    } else if (userChoiceButton === "btn-tijera") {
        userChoice = "scissors";
    }
    
    let computerChoice = ComputerSelection();
    let result = playRound(userChoice, computerChoice);
    updateScores(result);
}

function updateScores(result) {
    if (result === 1) {
        let puntosUsuario = parseInt(marcadorUsuario.textContent);
        puntosUsuario++;
        marcadorUsuario.textContent = puntosUsuario;
    } else if (result === -1) {
        let puntosComputadora = parseInt(marcadorComputadora.textContent);
        puntosComputadora++;
        marcadorComputadora.textContent = puntosComputadora;
    }
    checkGameOver();
}

function checkGameOver() {
    if (parseInt(marcadorUsuario.textContent) === 5) {
        alert("You win the game!");
        endGame();
    } else if (parseInt(marcadorComputadora.textContent) === 5) {
        alert("Computer wins the game!");
        endGame();
    }
}

function endGame() {
    // Desactivar botones de elección para evitar más jugadas
    totalopciones.forEach(btn => btn.disabled = true);
    // Mostrar y habilitar el botón de reinicio
    botonReiniciar.style.visibility = "visible";
    botonReiniciar.disabled = false;
}

function resetGame() {
    marcadorUsuario.textContent = 0;
    marcadorComputadora.textContent = 0;
    // Reactivar botones de elección
    totalopciones.forEach(btn => btn.disabled = false);
    // Ocultar y deshabilitar el botón de reinicio nuevamente
    botonReiniciar.style.visibility = "hidden";
    botonReiniciar.disabled = true;
}

# Rock Paper Scissors

Un juego clásico de "Piedra, Papel o Tijeras" desarrollado con HTML, CSS y JavaScript. En este juego, el jugador compite contra la computadora. Cada partida incrementa el marcador y el juego finaliza cuando uno de los dos alcanza 5 puntos.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Cómo Jugar](#cómo-jugar)
- [Características](#características)


## Descripción

El proyecto "Rock Paper Scissors" es una aplicación web sencilla que simula el juego de piedra, papel o tijeras. El usuario debe elegir una opción (piedra, papel o tijeras) y la computadora selecciona aleatoriamente una respuesta. Los resultados se determinan de acuerdo a las reglas clásicas:
- **Piedra vence a tijeras.**
- **Papel vence a piedra.**
- **Tijeras vencen a papel.**

El juego continúa hasta que uno de los participantes alcance 5 puntos, momento en el que se muestra un mensaje indicando el ganador y se habilita un botón para reiniciar la partida.

## Estructura del Proyecto

La organización de los archivos es la siguiente:



## Estructura del Proyecto

```
Project: Rock Paper Scissors
│── index.html
│── js/
│   └── app.js
│── css/
│   └── styles.css
└── assets/
    └── images/
```


### index.html

Contiene la estructura del documento HTML, que incluye:
- Un **header** con el título.
- Un **main** que muestra los marcadores, instrucciones y botones para que el usuario juegue.
- Un **footer** que contiene el título del juego.
- Referencias externas a `css/style.css` y `js/app.js`.

### css/style.css

Este archivo define el diseño visual de la aplicación:
- Se aplican estilos globales para márgenes, paddings y tipografía.
- Se usan **gradientes** para el fondo y se configuran estilos responsivos para los elementos (cabecera, marcador, instrucciones, botones, etc.).
- Se da especial atención a la disposición de elementos mediante `flexbox` para lograr una presentación limpia y centrada.

### js/app.js

Contiene toda la lógica interactiva del juego:
- Se obtienen referencias a los botones para que el usuario elija su opción, al botón para reiniciar el juego y a los elementos del marcador.
- Se asignan **event listeners** a los botones para capturar la selección del jugador.
- La función `ComputerSelection()` genera la elección de la computadora de forma aleatoria.
- La función `playRound()` determina el resultado de cada ronda comparando la elección del jugador y de la computadora, aplicando las reglas del juego.
- Los marcadores se actualizan a través de `updateScores()`, y se verifica si alguno de los jugadores ha alcanzado 5 puntos mediante `checkGameOver()`.
- Cuando se alcanza la condición de victoria, se desactivan los botones de elección y se muestra un botón para **reiniciar el juego**.
- La función `resetGame()` restablece los marcadores y reactiva los botones para iniciar una nueva partida.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura y el contenido de la aplicación.
- **CSS3**: Para el diseño, el estilo y la disposición responsiva de los elementos.
- **JavaScript (ES6)**: Para la lógica del juego, el manejo de eventos y la interacción dinámica.

## Instalación y Ejecución

1. **Clona el repositorio o descarga los archivos:**

   ```bash
   git clone https://github.com/ITSULI19/Project-Rock-Paper-Scissors.git
2. **Abre el archivo index.html en tu navegador:**

    Puedes hacer doble clic en el archivo o utilizar un servidor local para obtener mejores resultados.

## Cómo Jugar
1. El juego se inicia mostrando el marcador y las instrucciones en pantalla.

2. El usuario debe hacer clic en uno de los tres botones (piedra, papel o tijeras) para realizar su elección.

3. La computadora selecciona su opción de manera aleatoria.

4. Se determina el ganador de la ronda:

- Si el jugador gana, se incrementa su marcador.

- Si la computadora gana, se incrementa su marcador.

- En caso de empate, ninguno de los marcadores cambia.

5. El juego continúa hasta que uno de los participantes alcance 5 puntos.

6. Al finalizar la partida, se muestra una alerta indicando el ganador y se habilita el botón de Restart Game para comenzar una nueva partida.

## Características
- Interactividad Total: El juego permite seleccionar opciones y ver los resultados en tiempo real.

- Actualización de Marcadores: Los puntos se actualizan dinámicamente en la pantalla.

- Lógica de Juego Sólida: Reglas clásicas implementadas para determinar el ganador de cada ronda.

- Reinicio de Partida: Botón para reiniciar el juego una vez finalizada la partida.

- Estilo Atractivo: Diseño visual moderno con gradientes, flexbox y elementos responsivos.


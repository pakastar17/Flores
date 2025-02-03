// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "You're no good for me", time: 2 },
  { text: "Baby, you're no good for me", time: 4 },
  { text: "You're no good for me", time: 6 },
  { text: "But baby, I want you, I want", time: 8 },
  { text: "Diet Mountain Dew, baby, New York City", time: 12 },
  { text: "Never was there ever a girl so pretty", time: 14 },
  { text: "Do you think we'll be in love forever?", time: 16 },
  { text: "Do you think we'll be in love?", time: 18 },
  { text: "Diet Mountain Dew, baby, New York City", time: 20 },
  { text: "Can we hit it now, low-down and gritty?", time: 22 },
  { text: "Do you think we'll be in love forever?", time: 24 },
  { text: "Do you think we'll be in love", time: 26 },
  { text: "Baby, put on heart-shaped sunglasses", time: 28 },
  { text: "'Cause we gonna take a ride", time: 30 },
  { text: "I'm not gonna listen to what the past says", time: 32 },
  { text: "I've been waiting up all night", time: 34 },
  { text: "Take another drag, turn me to ashes", time: 36 },
  { text: "Ready for another lie?", time: 38 },
  { text: "Says he's gonna teach me just what fast is", time: 40 },
  { text: "Say it's gonna be alright", time: 42 },
  { text: "Diet Mountain Dew, baby, New York City", time: 44 },
  { text: "Never was there ever a girl so pretty", time: 46 },
  { text: "Do you think we'll be in love forever?", time: 48 },
  { text: "Do you think we'll be in love?", time: 50 },
  { text: "Diet Mountain Dew, baby, New York City", time: 52 },
  { text: "Can we hit it now, low-down and gritty", time: 54 },
  { text: "Do you think we'll be in love forever?", time: 56},
]

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
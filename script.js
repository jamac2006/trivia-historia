const quizData = [
  {
    pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
    opciones: ["1939","1914","1945","1929"],
    respuesta: "1939"
  },
  {
    pregunta: "¿Quién descubrió América?",
    opciones: ["Cristóbal Colón","Magallanes","Napoleón","Bolívar"],
    respuesta: "Cristóbal Colón"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[current];
  const quiz = document.getElementById("quiz");

  quiz.innerHTML = `
    <h2>${q.pregunta}</h2>
    ${q.opciones.map(op => `
      <button onclick="selectAnswer('${op}')">${op}</button>
    `).join("")}
  `;
}

function selectAnswer(answer) {
  if (answer === quizData[current].respuesta) {
    score++;
  }
  current++;

  if (current < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = "Fin del juego";
    document.getElementById("score").innerText = "Puntaje: " + score;
  }
}

loadQuestion();
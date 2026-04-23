const quizData = [
  {
    pregunta: "¿Capital de Chile?",
    opciones: ["Santiago","Lima","Bogotá","Buenos Aires"],
    respuesta: "Santiago"
  },
  {
    pregunta: "¿Año inicio Segunda Guerra Mundial?",
    opciones: ["1939","1914","1945","1929"],
    respuesta: "1939"
  }
];

let current = 0;
let score = 0;
let time = 10;
let timer;

// Mezclar
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(quizData);

function loadQuestion() {
  const q = quizData[current];

  document.getElementById("progress").innerText =
    `${current + 1}/${quizData.length}`;

  const opciones = [...q.opciones];
  shuffle(opciones);

  document.getElementById("quiz").innerHTML = `
    <h2>${q.pregunta}</h2>
    ${opciones.map(op => `<button class="option">${op}</button>`).join("")}
  `;

  document.querySelectorAll(".option").forEach(btn => {
    btn.onclick = () => selectAnswer(btn.innerText);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  time = 10;

  timer = setInterval(() => {
    document.getElementById("timer").innerText = "⏱️ " + time;
    time--;

    if (time < 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(answer) {
  clearInterval(timer);

  const correct = quizData[current].respuesta;
  const buttons = document.querySelectorAll(".option");

  buttons.forEach(btn => {
    if (btn.innerText === correct) {
      btn.style.background = "green";
    } else {
      btn.style.background = "red";
    }
    btn.disabled = true;
  });

  if (answer === correct) score++;

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  current++;

  if (current < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `
      <h2>🎉 Fin del juego</h2>
      <button onclick="location.reload()">Reiniciar</button>
    `;
    document.getElementById("result").innerText =
      `Puntaje: ${score}/${quizData.length}`;
  }
}

loadQuestion();

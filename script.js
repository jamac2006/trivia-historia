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
  // 👉 agrega aquí tus 100 preguntas
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

  const quiz = document.getElementById("quiz");

  // animación
  quiz.style.opacity = 0;

  setTimeout(() => {
    quiz.innerHTML = `
      <h2>${q.pregunta}</h2>
      ${opciones.map(op => `<button class="option">${op}</button>`).join("")}
    `;
    quiz.style.opacity = 1;

    document.querySelectorAll(".option").forEach(btn => {
      btn.onclick = () => selectAnswer(btn);
    });

  }, 200);

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

function selectAnswer(button) {
  clearInterval(timer);

  const correct = quizData[current].respuesta;
  const buttons = document.querySelectorAll(".option");

  buttons.forEach(btn => {
    if (btn.innerText === correct) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (button.innerText === correct) {
    score++;
  }

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  current++;

  if (current < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `
      <h2>🎉 Juego terminado</h2>
      <button onclick="location.reload()">Reiniciar</button>
    `;
    document.getElementById("result").innerText =
      `Puntaje: ${score}/${quizData.length}`;
  }
}

loadQuestion();

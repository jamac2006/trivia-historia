const quizData = [
{"pregunta":"¿En qué año comenzó la Segunda Guerra Mundial?","opciones":["1939","1914","1945","1929"],"respuesta":"1939"},
{"pregunta":"¿Quién descubrió América en 1492?","opciones":["Cristóbal Colón","Américo Vespucio","Hernán Cortés","Simón Bolívar"],"respuesta":"Cristóbal Colón"},
{"pregunta":"¿Qué civilización construyó las pirámides de Giza?","opciones":["Egipcia","Romana","Griega","Maya"],"respuesta":"Egipcia"},
{"pregunta":"¿Quién fue el primer emperador romano?","opciones":["Augusto","Julio César","Nerón","Trajano"],"respuesta":"Augusto"},
{"pregunta":"¿En qué año terminó la Segunda Guerra Mundial?","opciones":["1945","1939","1918","1950"],"respuesta":"1945"},
{"pregunta":"¿Qué imperio dominó gran parte de Sudamérica antes de los españoles?","opciones":["Inca","Azteca","Maya","Olmeca"],"respuesta":"Inca"},
{"pregunta":"¿Quién fue Napoleón Bonaparte?","opciones":["Emperador francés","Rey inglés","General romano","Filósofo griego"],"respuesta":"Emperador francés"},
{"pregunta":"¿Dónde nació la democracia?","opciones":["Grecia","Roma","Egipto","China"],"respuesta":"Grecia"},
{"pregunta":"¿Qué muro cayó en 1989?","opciones":["Muro de Berlín","Gran Muralla China","Muro de Adriano","Muro de Troya"],"respuesta":"Muro de Berlín"},
{"pregunta":"¿Quién lideró la independencia de Chile?","opciones":["Bernardo O’Higgins","Arturo Prat","José Miguel Carrera","Diego Portales"],"respuesta":"Bernardo O’Higgins"},

{"pregunta":"¿Qué civilización creó la escritura cuneiforme?","opciones":["Sumeria","Egipcia","China","India"],"respuesta":"Sumeria"},
{"pregunta":"¿Quién fue el líder de Alemania en la Segunda Guerra Mundial?","opciones":["Adolf Hitler","Stalin","Churchill","Roosevelt"],"respuesta":"Adolf Hitler"},
{"pregunta":"¿Qué imperio tenía su capital en Roma?","opciones":["Romano","Otomano","Bizantino","Persa"],"respuesta":"Romano"},
{"pregunta":"¿En qué continente surgió el antiguo Egipto?","opciones":["África","Asia","Europa","América"],"respuesta":"África"},
{"pregunta":"¿Quién fue el primer presidente de Estados Unidos?","opciones":["George Washington","Abraham Lincoln","Jefferson","Roosevelt"],"respuesta":"George Washington"},
{"pregunta":"¿Qué guerra fue entre Norte y Sur en EE.UU.?","opciones":["Guerra Civil","Primera Guerra Mundial","Guerra Fría","Vietnam"],"respuesta":"Guerra Civil"},
{"pregunta":"¿Qué imperio construyó el Coliseo?","opciones":["Romano","Griego","Persa","Inca"],"respuesta":"Romano"},
{"pregunta":"¿Qué revolución ocurrió en Francia en 1789?","opciones":["Revolución Francesa","Industrial","Rusa","Americana"],"respuesta":"Revolución Francesa"},
{"pregunta":"¿Quién fue Julio César?","opciones":["Líder romano","Rey egipcio","Filósofo","Explorador"],"respuesta":"Líder romano"},
{"pregunta":"¿Qué país lanzó la bomba atómica en 1945?","opciones":["Estados Unidos","Alemania","Japón","URSS"],"respuesta":"Estados Unidos"},

{"pregunta":"¿Qué cultura creó Machu Picchu?","opciones":["Inca","Maya","Azteca","Olmeca"],"respuesta":"Inca"},
{"pregunta":"¿Quién fue Simón Bolívar?","opciones":["Libertador","Rey","Explorador","Filósofo"],"respuesta":"Libertador"},
{"pregunta":"¿Qué país era gobernado por faraones?","opciones":["Egipto","Grecia","Roma","India"],"respuesta":"Egipto"},
{"pregunta":"¿Qué guerra duró de 1914 a 1918?","opciones":["Primera Guerra Mundial","Segunda Guerra Mundial","Vietnam","Corea"],"respuesta":"Primera Guerra Mundial"},
{"pregunta":"¿Quién fue Mahatma Gandhi?","opciones":["Líder pacifista","Rey","General","Explorador"],"respuesta":"Líder pacifista"},
{"pregunta":"¿Qué imperio fue gobernado por Gengis Kan?","opciones":["Mongol","Romano","Persa","Otomano"],"respuesta":"Mongol"},
{"pregunta":"¿Dónde estaban los aztecas?","opciones":["México","Perú","Chile","Brasil"],"respuesta":"México"},
{"pregunta":"¿Quién descubrió la penicilina?","opciones":["Alexander Fleming","Pasteur","Newton","Darwin"],"respuesta":"Alexander Fleming"},
{"pregunta":"¿Qué país tenía a los samuráis?","opciones":["Japón","China","Corea","India"],"respuesta":"Japón"},
{"pregunta":"¿Qué civilización construyó Chichén Itzá?","opciones":["Maya","Inca","Azteca","Olmeca"],"respuesta":"Maya"},

{"pregunta":"¿Quién fue el líder soviético en la Segunda Guerra Mundial?","opciones":["Stalin","Lenin","Putin","Trotsky"],"respuesta":"Stalin"},
{"pregunta":"¿Qué país colonizó Chile?","opciones":["España","Portugal","Inglaterra","Francia"],"respuesta":"España"},
{"pregunta":"¿Qué tratado terminó la Primera Guerra Mundial?","opciones":["Versalles","Tordesillas","París","Madrid"],"respuesta":"Versalles"},
{"pregunta":"¿Quién fue Cleopatra?","opciones":["Reina egipcia","Diosa","General","Filósofa"],"respuesta":"Reina egipcia"},
{"pregunta":"¿Qué cultura usaba jeroglíficos?","opciones":["Egipcia","Romana","Griega","China"],"respuesta":"Egipcia"},
{"pregunta":"¿Quién fue Leonardo da Vinci?","opciones":["Artista","Rey","General","Explorador"],"respuesta":"Artista"},
{"pregunta":"¿Qué imperio cayó en 1453?","opciones":["Bizantino","Romano","Inca","Otomano"],"respuesta":"Bizantino"},
{"pregunta":"¿Qué país tenía vikingos?","opciones":["Noruega","Italia","España","Grecia"],"respuesta":"Noruega"},
{"pregunta":"¿Qué cultura creó el calendario solar?","opciones":["Maya","Romana","Griega","China"],"respuesta":"Maya"},
{"pregunta":"¿Qué explorador dio la vuelta al mundo?","opciones":["Magallanes","Colón","Cook","Drake"],"respuesta":"Magallanes"},

{"pregunta":"¿Quién fue Winston Churchill?","opciones":["Primer ministro británico","Rey","General romano","Filósofo"],"respuesta":"Primer ministro británico"},
{"pregunta":"¿Qué guerra fue entre EE.UU. y Vietnam?","opciones":["Guerra de Vietnam","Corea","Irak","Afganistán"],"respuesta":"Guerra de Vietnam"},
{"pregunta":"¿Qué imperio dominó Turquía?","opciones":["Otomano","Romano","Persa","Mongol"],"respuesta":"Otomano"},
{"pregunta":"¿Quién fue Abraham Lincoln?","opciones":["Presidente EE.UU.","General","Rey","Filósofo"],"respuesta":"Presidente EE.UU."},
{"pregunta":"¿Qué civilización construyó la Gran Muralla?","opciones":["China","Japón","Corea","India"],"respuesta":"China"},
{"pregunta":"¿Qué país tenía gladiadores?","opciones":["Roma","Grecia","Egipto","China"],"respuesta":"Roma"},
{"pregunta":"¿Qué tratado dividió América entre España y Portugal?","opciones":["Tordesillas","Versalles","París","Roma"],"respuesta":"Tordesillas"},
{"pregunta":"¿Quién fue Karl Marx?","opciones":["Filósofo","Rey","General","Explorador"],"respuesta":"Filósofo"},
{"pregunta":"¿Qué revolución ocurrió en Rusia en 1917?","opciones":["Revolución Rusa","Francesa","Industrial","Americana"],"respuesta":"Revolución Rusa"},
{"pregunta":"¿Qué país tenía emperadores llamados zares?","opciones":["Rusia","China","Japón","India"],"respuesta":"Rusia"},

{"pregunta":"¿Quién fue Hernán Cortés?","opciones":["Conquistador","Rey","Filósofo","General"],"respuesta":"Conquistador"},
{"pregunta":"¿Qué civilización vivía en los Andes?","opciones":["Inca","Maya","Azteca","Egipcia"],"respuesta":"Inca"},
{"pregunta":"¿Qué imperio usaba legiones?","opciones":["Romano","Persa","Mongol","Otomano"],"respuesta":"Romano"},
{"pregunta":"¿Quién fue Martin Luther King?","opciones":["Activista","Rey","General","Explorador"],"respuesta":"Activista"},
{"pregunta":"¿Qué guerra fue contra el nazismo?","opciones":["Segunda Guerra Mundial","Primera","Vietnam","Corea"],"respuesta":"Segunda Guerra Mundial"},
{"pregunta":"¿Qué cultura usaba pirámides en México?","opciones":["Azteca","Inca","Romana","Griega"],"respuesta":"Azteca"},
{"pregunta":"¿Quién fue Isaac Newton?","opciones":["Científico","Rey","General","Explorador"],"respuesta":"Científico"},
{"pregunta":"¿Qué imperio tenía sultanes?","opciones":["Otomano","Romano","Inca","Maya"],"respuesta":"Otomano"},
{"pregunta":"¿Qué país inició la Revolución Industrial?","opciones":["Inglaterra","Francia","Alemania","EE.UU."],"respuesta":"Inglaterra"},
{"pregunta":"¿Quién fue Juana de Arco?","opciones":["Heroína","Reina","Filósofa","Exploradora"],"respuesta":"Heroína"},

{"pregunta":"¿Qué continente colonizó España principalmente?","opciones":["América","África","Asia","Europa"],"respuesta":"América"},
{"pregunta":"¿Qué imperio estaba en Persia?","opciones":["Persa","Romano","Inca","Otomano"],"respuesta":"Persa"},
{"pregunta":"¿Quién fue Charles Darwin?","opciones":["Científico","Rey","General","Explorador"],"respuesta":"Científico"},
{"pregunta":"¿Qué guerra fue entre Corea del Norte y Sur?","opciones":["Guerra de Corea","Vietnam","WWII","WWI"],"respuesta":"Guerra de Corea"},
{"pregunta":"¿Qué cultura creó los Juegos Olímpicos?","opciones":["Griega","Romana","Egipcia","China"],"respuesta":"Griega"},
{"pregunta":"¿Quién fue Marco Polo?","opciones":["Explorador","Rey","General","Filósofo"],"respuesta":"Explorador"},
{"pregunta":"¿Qué imperio dominó gran parte de Europa medieval?","opciones":["Romano","Otomano","Mongol","Inca"],"respuesta":"Romano"},
{"pregunta":"¿Qué cultura estaba en Mesopotamia?","opciones":["Sumeria","Inca","Maya","Azteca"],"respuesta":"Sumeria"},
{"pregunta":"¿Napoleón fue derrotado en Waterloo?","opciones":["Sí","No","Parcialmente","No participó"],"respuesta":"Sí"},
{"pregunta":"¿Qué país era aliado de EE.UU. en WWII?","opciones":["Reino Unido","Alemania","Japón","Italia"],"respuesta":"Reino Unido"}
];

let current = 0;
let score = 0;

// 🔀 Mezclar (Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Mezclar preguntas al iniciar
shuffle(quizData);

function loadQuestion() {
  const q = quizData[current];
  const quiz = document.getElementById("quiz");

  const opcionesMezcladas = shuffle([...q.opciones]);

  quiz.innerHTML = `
    <h2>${q.pregunta}</h2>
    ${opcionesMezcladas.map(op => `
      <button class="option">${op}</button>
    `).join("")}
  `;

  // Agregar eventos a botones
  document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => selectAnswer(btn));
  });
}

function selectAnswer(button) {
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

  if (button.innerText === correct) {
    score++;
  }

  setTimeout(() => {
    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz").innerHTML = "🎉 Fin del juego";
      document.getElementById("score").innerText =
        "Puntaje final: " + score + "/" + quizData.length;
    }
  }, 1000);
}

loadQuestion();

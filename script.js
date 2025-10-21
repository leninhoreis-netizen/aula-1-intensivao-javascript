const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");
const textoCapitulo = document.getElementById("capitulo");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const qtdCapitulos = 10;
//console.log(audio);

//audio.play();

let taTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
  console.log("Clicou!");
  audio.play();
  taTocando = true;
  console.log("Deu Play!");

  botaoPlayPause.classList.add("tocando");
}

function pausarFaixa() {
  console.log("Clicou!");
  audio.play();
  taTocando = false;
  console.log("Deu Pause!");

  botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function CapituloAnterior() {
  pausarFaixa();

  if (capituloAtual === 1) {
    capituloAtual = qtdCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo " + capituloAtual;
}

function ProximoCapitulo() {
  pausarFaixa();

  if (capituloAtual < qtdCapitulos) {
    capituloAtual = capituloAtual + 1;
  } else {
    capituloAtual = 1;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capitulo " + capituloAtual;
}

botaoPlayPause.addEventListener("click", tocarFaixa);
botaoCapituloAnterior.addEventListener("click", tocarCapituloAnterior);
botaoProximoCapitulo.addEventListener("click", tocarProximoCapitulo);

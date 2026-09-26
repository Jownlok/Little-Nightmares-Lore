var botao1 = document.querySelector(".historia");
var botao2 = document.querySelector(".personagens");
var botao3 = document.querySelector(".criadores");
var botao4 = document.querySelector(".historia2");
var botao5 = document.querySelector(".personagens2");
var botao6 = document.querySelector(".criadores2");
var botao7 = document.querySelector(".historia3");
var botao8 = document.querySelector(".personagens3");
var botao9 = document.querySelector(".criadores3");

[botao1, botao2, botao3, botao4, botao5, botao6, botao7, botao8, botao9].forEach(function(botao) {
  if (!botao) return;

  botao.style.position = "relative";

  var linha = document.createElement("div");
  linha.style.cssText = "position: absolute; bottom: 0; left: 0; width: 0%; height: 2px; background: white; transition: 0.3s;";
  botao.appendChild(linha);

  botao.addEventListener("mouseenter", function() {
    linha.style.width = "100%";
  });

  botao.addEventListener("mouseleave", function() {
    linha.style.width = "0%";
  });
});

// SFX Botões
const som = new Audio('../mp3/button_start.ogg');
[botao1, botao2, botao3, botao4, botao5, botao6, botao7, botao8, botao9].forEach(botao => {
  botao.addEventListener('mouseenter', () => {
    som.currentTime = 0;
    som.play();
  });
});

// Fade / Musica de inicio em LOOP
const musicaFundo = new Audio('./mp3/musica.mp3');
musicaFundo.loop = true;
musicaFundo.muted = true;

musicaFundo.play().then(() => {
  const ativarSom = () => {
    musicaFundo.muted = false;
    document.removeEventListener('click', ativarSom);
  };
  document.addEventListener('click', ativarSom);
}).catch(() => {});

function pararComFadeOut(audio, duracaoEmSegundos = 1.5) {
  const passos = 20;
  const intervaloTempo = (duracaoEmSegundos * 1000) / passos;
  const decrementoVolume = audio.volume / passos;

  const fade = setInterval(() => {
    if (audio.volume > decrementoVolume) {
      audio.volume -= decrementoVolume;
    } else {
      audio.volume = 0;
      audio.pause();
      clearInterval(fade);
    }
  }, intervaloTempo);
}

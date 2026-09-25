var botao1 = document.querySelector(".historia");
var botao2 = document.querySelector(".personagens");
var botao3 = document.querySelector(".criadores");

[botao1, botao2, botao3].forEach(function(botao) {
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

[botao1, botao2, botao3].forEach(botao => {
  botao.addEventListener('mouseenter', () => {
    som.currentTime = 0;
    som.play();
  });
});

// Fade / Musica de inicio em LOOP
const musicaFundo = new Audio('../mp3/musica.mp3');
musicaFundo.loop = true;

musicaFundo.play().catch(error => {
  console.log("O navegador bloqueou o áudio automático.");
});
function pararComFadeOut(audio, duracaoEmSegundos = 1.5) {
  const passos = 20; 
  const intervaloTempo = (duracaoEmSegundos * 1000) / passos;
  const decrementoVolume = audio.volume / passos;

  const fade = setInterval(() => {
    if (audio.volume > decrementoVolume) {
      audio.volume -= decrementoVolume;
    } else {
      audio.volume = 0;audio.pause();clearInterval(fade);
    }
  }, intervaloTempo);
}


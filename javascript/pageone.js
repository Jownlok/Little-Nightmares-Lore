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
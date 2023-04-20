"use strict";
// selecione o botão usando o método getElementById
const button = document.getElementById("botao");
if (button) { // verifica se o elemento foi encontrado
    // adicione um evento de clique ao botão
    button.addEventListener("click", function () {
        // selecione o parágrafo usando o método getElementById
        const conteudo = document.getElementById("conteudo");
        if (conteudo) { // verifica se o elemento foi encontrado
            // altere o texto do parágrafo
            if (conteudo.style.color == "black") {
                conteudo.style.color = "white";
                conteudo.style.backgroundColor = "black";
            }
            else {
                conteudo.style.color = "black";
                conteudo.style.backgroundColor = "white";
            }
        }
    });
}

// selecione o botão usando o método getElementById
var botao = document.getElementById("botao");
if (botao) { // verifica se o elemento foi encontrado
    // adicione um evento de clique ao botão
    botao.addEventListener("click", function () {
        // selecione o parágrafo usando o método getElementById
        var paragrafo = document.getElementById("paragrafo");
        if (paragrafo) { // verifica se o elemento foi encontrado
            // altere o texto do parágrafo
            paragrafo.textContent = "O texto deste parágrafo foi alterado!";
        }
    });
}

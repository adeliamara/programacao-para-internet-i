document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', calculeResultado);
});

function calculeResultado() {
    var conteudo = document.getElementById('caixaDeTexto').value;

    if(conteudo){
        document.getElementById('conteudo').innerHTML = conteudo;
    }else {
        alert("Erro: Nenhum conteúdo encontrado!");
        document.getElementById('conteudo').innerHTML = '<span style="color:red;">Erro: Nenhum conteúdo encontrado!</span>';
    }
}
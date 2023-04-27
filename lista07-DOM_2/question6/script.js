document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('submit');
    botaoExibir.addEventListener('click', converterTexto);
});

function converterTexto() {
    let texto = document.getElementById('caixaDeTexto').value;
    let tipo = document.getElementById('tipo').value;

    if(tipo == "uppercase"){
        document.getElementById('conteudo').innerHTML = texto.toUpperCase();
    }else{
        document.getElementById('conteudo').innerHTML = texto.toLowerCase();
    }
}
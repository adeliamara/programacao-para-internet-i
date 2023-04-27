document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoCalcular');
    botaoExibir.addEventListener('click', converterTexto);
});

function converterTexto() {
    let base = document.getElementById('caixaDeNumero1').value;
    let expoente = document.getElementById('caixaDeNumero2').value;
    let caixaResultado = document.getElementById("resultado");

    if (isNaN(base) || isNaN(expoente)) {
        caixaResultado.classList.add("mostrar");
        alert("Erro: Base e expoente devem ser do tipo numero!");
        caixaResultado.innerHTML = 'Operacao invalida';
    } else {
        if (base && expoente) {
            let resultado = base ** expoente;
            caixaResultado.innerHTML = `${base}<sup>${expoente}</sup> = ${resultado}`;
            caixaResultado.classList.add("mostrar"); // adiciona a classe "mostrar" para exibir a caixa
        } else {
            caixaResultado.classList.remove("mostrar");
            alert("Erro: Nenhum conteúdo encontrado!");
            document.getElementById('conteudo').innerHTML = '<span style="color:red;">Erro: Nenhum conteúdo encontrado!</span>';
        }
    }

}
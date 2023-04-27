document.addEventListener('DOMContentLoaded', function () {
  var botaoExibir = document.getElementById('botaoExibirImagem');
  botaoExibir.addEventListener('click', addOption);
});

function addOption() {
  let valorSelecionado = document.getElementById('selecaoImagem').value;
  let caixaConteudo = document.getElementById('conteudo');

  if (valorSelecionado !== 'default') {
    let img = document.createElement('img');
    img.src = valorSelecionado;
    caixaConteudo.innerHTML = '';
    caixaConteudo.appendChild(img);
  } else {
    alert('Erro: Selecione uma imagem!');
    document.getElementById('conteudo').innerHTML =
      '<span style="color:red;">Erro: Selecione uma imagem!</span>';
  }
}

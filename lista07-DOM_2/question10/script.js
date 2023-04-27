document.addEventListener('DOMContentLoaded', function () {
  var botaoExibir = document.getElementById('transf1to2');
  botaoExibir.addEventListener('click', function () {
      transferirOpcoes('select1', 'select2');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var botaoExibir = document.getElementById('transf2to1');
  botaoExibir.addEventListener('click', function () {
      transferirOpcoes('select2', 'select1');
  });
});

function transferirOpcoes(origem, destino) {
  let selectOrigem = document.getElementById(origem);
  let selectDestino = document.getElementById(destino);
  let opcoesSelecionadas = Array.from(selectOrigem.selectedOptions);

  opcoesSelecionadas.forEach(function (opcao) {
      let novaOpcao = document.createElement('option');
      novaOpcao.value = opcao.value;
      novaOpcao.text = opcao.text;
      selectDestino.add(novaOpcao);
  });

  opcoesSelecionadas.forEach(function (opcao) {
      selectOrigem.remove(opcao.index);
  });
}
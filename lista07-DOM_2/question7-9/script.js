document.addEventListener('DOMContentLoaded', function () {
  var botaoExibir = document.getElementById('submit');
  botaoExibir.addEventListener('click', addOption);
});

document.addEventListener('DOMContentLoaded', function () {
  var botaoExibir = document.getElementById('remove');
  botaoExibir.addEventListener('click', removeOption);
});

function addOption() {
  let valorSelecionado = document.getElementById('caixaDeTexto').value;
  let select = document.getElementsByTagName('select')[0];

  let collection_options = select.getElementsByTagName('option');

  if (valorSelecionado !== '') {
    if (collection_options.length < 5) {
      if (findOption(select, valorSelecionado) === null) {
        let option = document.createElement('option');
        option.textContent = valorSelecionado;
        select.appendChild(option);
      } else {
        alert('A opção já existe!');
      }
    } else {
      alert('Erro: limite de opções atingido');
    }
  } else {
    alert('Erro: o valor deve ser preenchido!');
  }
}

function removeOption() {
  let valorSelecionado = document.getElementById('caixaDeTexto').value;
  let select = document.getElementsByTagName('select')[0];

  if (valorSelecionado !== '') {
    let option = findOption(select, valorSelecionado);
    if (option !== null) {
      select.removeChild(option);
    }else{
      alert("opcao indicada nao existe");
    }
  } else {
    alert('Erro: o valor deve ser preenchido!');
  }
}

function findOption(select, valorSelecionado) {
  let options = select.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === valorSelecionado) {
      return options[i];
    }
  }
  return null;
}



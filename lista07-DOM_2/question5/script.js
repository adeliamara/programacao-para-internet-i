document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('submit');
    button.addEventListener('click', function(event) {
      if (!verificarCheckboxes()) {
        event.preventDefault(); // Impede o envio do formulário
      }
    });
  });
  
  function verificarCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        alert("Formulario enviado");
        return true;
      }
    }
    alert("Você precisa marcar pelo menos 1 checkbox.");
    return false;
  }
  
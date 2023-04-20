// espera o documento ser carregado para iniciar o script
document.addEventListener("DOMContentLoaded", function() {
	// cria um elemento de texto para cada caractere da matriz
	var chars = [];
	for (var i = 0; i < 1000; i++) {
		var char = document.createElement("span");
		char.textContent = String.fromCharCode(Math.random() * 94 + 33); // caracteres entre ! e ~
		char.style.position = "absolute";
		char.style.left = Math.random() * 100 + "%"; // posição horizontal aleatória
		char.style.top = Math.random() * 100 + "%"; // posição vertical aleatória
    char.style.animation = "matrix 5s linear " + (Math.random() * 10) + "s infinite"; // animação que faz o caractere subir
		chars.push(char);
		document.body.appendChild(char);
	}

	// define a animação da matriz
	var style = document.createElement("style");
	style.textContent = "@keyframes matrix { 0% { transform: translateY(100vh); } 100% { transform: translateY(-100vh); } }";
	document.head.appendChild(style);

	// remove a tela preta e mostra as letras após o carregamento do script
	document.body.classList.remove("loading");
});

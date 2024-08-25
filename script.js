document.getElementById('input-text').addEventListener('click', function() {
	document.getElementById('muñeco').style.display = 'none';
	document.getElementById('column-layout').style.display = 'none';
	this.placeholder = '';
});

document.getElementById('input-text').addEventListener('input', function() {
	const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
	if (!regex.test(this.value)) {
		alert('No se permite el uso de acentos, mayúsculas ni caracteres especiales');
		location.reload(); // Recarga la página
	}
});

document.querySelector('.btn-encrypt').addEventListener('click', function() {
	if (verificarEntradaVacia()) {
		event.preventDefault(); // Previene la acción por defecto del botón
		return;
	}
	
	const inputText = document.getElementById('input-text').value;
	const encryptedText = inputText
		.replace(/e/g, 'enter')
		.replace(/i/g, 'imes')
		.replace(/a/g, 'ai')
		.replace(/o/g, 'ober')
		.replace(/u/g, 'ufat');
	
	const resultContainer = document.getElementById('result-container');
	resultContainer.innerText = encryptedText;
	resultContainer.style.display = 'block';
	document.getElementById('copy-button').style.display = 'flex'; // Muestra el botón "Copiar"
});

document.getElementById('copy-button').addEventListener('click', function() {
    const resultText = document.getElementById('result-container').innerText;
    navigator.clipboard.writeText(resultText).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        alert('Error al copiar el texto: ', err);
    });
});

document.querySelector('.btn-decrypt').addEventListener('click', function() {
    if (verificarEntradaVacia()) {
		event.preventDefault(); // Previene la acción por defecto del botón
		return;
	}
	
	const inputText = document.getElementById('input-text').value;
    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerText = decryptedText;
    resultContainer.style.display = 'block';
    document.getElementById('copy-button').style.display = 'flex'; // Muestra el botón "Copiar"
});

function verificarEntradaVacia() {
	const inputText = document.getElementById('input-text').value.trim();
	if (inputText === '') {
		alert('Por favor, introduzca un mensaje.');
		location.reload(); // Refresca la página
		return true;
	}
	return false;
}




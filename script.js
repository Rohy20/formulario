

function exibirAlerta(){
	const nome = document.getElementById('nome').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('mensagem').value;

    const alertMessage = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${message}`

		alert(alertMessage)
}
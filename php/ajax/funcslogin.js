// Vari�vel que receber� o objeto XMLHttpRequest
var req;
 
function validarLogin(campo, valor) {
 
// Verificar o Browser
// Firefox, Google Chrome, Safari e outros
if(window.XMLHttpRequest) {
   req = new XMLHttpRequest();
}
// Internet Explorer
else if(window.ActiveXObject) {
   req = new ActiveXObject("Microsoft.XMLHTTP");
}
 
// Aqui vai o valor e o nome do campo que pediu a requisi��o.
var url = "ajax/login.php?campo="+campo+"&valor="+valor;
 
// Chamada do m�todo open para processar a requisi��o
req.open("Get", url, true);
 
// Quando o objeto recebe o retorno, � chamada a seguinte fun��o;
req.onreadystatechange = function() {
 
	// Exibe a mensagem "Verificando" enquanto carrega
	if(req.readyState == 1) {
		document.getElementById('campo_login').innerHTML = '<font color="gray">Verificando...</font>';
	}
 
	// Verifica se o Ajax realizou todas as opera��es corretamente
	if(req.readyState == 4 && req.status == 200) {
	// Resposta retornada pelo validacao.php (pagina de conex�o com o BD)
	var resposta = req.responseText;
 
	// Resposta na div do campo que fez a requisi��o
	document.getElementById('campo_login').innerHTML = resposta;
	}
 
}
 
req.send(null);
 
}
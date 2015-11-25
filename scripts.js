//MENU
document.getElementById('menu').innerHTML = '\
	<h1 class="tit">Menu</h1>\
	<a href="new-client.html">Cadastrar</a>\
	<br>\
	<a href="edit-client.html">Editar</a>\
	<br>\
	<a href="list-clients.html">Listar</a>\
	<br>\
	<a href="upload-file.html">Enviar Foto</a>\
';


//CSS
function loadCSS(url) {
    var lnk = document.createElement('link');
    lnk.setAttribute('type', "text/css" );
    lnk.setAttribute('rel', "stylesheet" );
    lnk.setAttribute('href', url );
    var tagHead = document.getElementsByTagName("head").item(0).appendChild(lnk);
}
loadCSS("style.css");
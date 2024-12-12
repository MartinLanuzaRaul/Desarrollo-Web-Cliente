//Asegurar toda la carga del DOM
window.addEventListener("load", function (){
	//Asignación de elementos
	var imagen = document.getElementById("imagen");
	var tipo = document.getElementById("tipo");
	var labelSerie = document.getElementById("labelSerie");
	var serie = document.getElementById("serie");
	var mostrarDescripcion = document.getElementById("mostrarDescripcion");
	var campoDescripcion = document.getElementById("campoDescripcion");
	var condiciones = document.getElementById("condiciones");
	var enviar = document.getElementById("enviar");
	var capaError = document.getElementById("capaError");


	//Cambiar la imagen
	tipo.addEventListener("change", function() {
		//imagen.setAttribute("src","img/" + tipo.value + ".jpg");
		imagen.src = "img/" + tipo.value + ".jpg";
	});
	
	//Click en el botón de descripción, muestra una capa con el área de texto y la etiqueta
	mostrarDescripcion.addEventListener("click", function() {
		campoDescripcion.style.display = "block";
		this.style.display = "none";
	});

	//Validación del número de serie al intentar enviar los datos (evento click o evento submit)
	//document.forms[0].addEventListener("submit", function(event) {
	enviar.addEventListener("click", function() {
		let errores = "";
		
		if(/^[0-9]{3}[A-Z]{4}[12A]$/.test(serie.value) == false){
			event.preventDefault();
			errores = "<p>El número de serie no es válido</p>";
			
			//labelSerie.classList.add("error");
			labelSerie.className = "error";
			
			//serie.classList.add("error");
			serie.className = "error";
		} 
		
		if(condiciones.checked == false) {
			event.preventDefault();
			errores += "<p>Debe leer y aceptar las condiciones del servicio</p>";
		}
		
		capaError.innerHTML = errores;
	});
	
	//Si se coloca el foco en el campo número de serie desaparecen los signos de error
	serie.addEventListener("focus", function() {
		capaError.innerHTML = "";
		
		//labelSerie.classList.remove("error");
		labelSerie.className = "";
		
		//serie.classList.remove("error");
		serie.className = "";
	});
});
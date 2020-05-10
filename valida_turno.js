
$(document).ready(function(){

	$("#enviar").click(function(){

		var nombre= $("#nombre").val();
		var apellido= $("#apellido").val();
		var medico= $("#medico").val();
		var especialidad= $("#especialidad").val();

		if(nombre==""){

			$("#nombre").css("background-color","#F7819F");
			alert("nombre requerido");
			return false;
			
		}else if(apellido==""){

			$("#apellido").css("background-color","#F7819F");
			alert("apellido requerido");
			return false;

		}else if(medico==""){

			$("#medico").css("background-color","#F7819F");
			alert("ingrese un medico");
			return false;

		}else if(especialidad==""){

			$("#especialidad").css("background-color","#F7819F");
			alert("ingrese una especialidad");
			return false;
		}

		var edad= $("#edad").val();

		if(edad< 0 || edad>120){

			$("#edad").css("background-color","#F7819F");
			alert("edad incorrecta");
			return false;
		}

		var dni= $("#documento").val();

		if(dni==""){

			$("#documento").css("background-color","#F7819F");
			alert("documento requerido");
			return false;

		}else if(dni.length !=8 ){

			$("#documento").css("background-color","#F7819F");
			alert("longitud de documento invalida");
			return false;

		}
		return true;


	});


});
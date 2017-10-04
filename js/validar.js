function validacion(){
 var nomb = document.getElementById("nombre").value;
 var emai = document.getElementById("email").value;
 var passw = document.getElementById("clave").value;
 var expresion = /\w+@\w+\.+[a-z]/;
var expresionn = /[$%&?¿]/;
var expresionnn = / /;
if(nomb == ""){
	 alert("Complete el campo nombre");
	 return false;
 }
 if(emai == ""){
	 alert("Complete el campo de email");
	 return false;
 }  
 if(passw == ""){
	 alert("Complete el campo de contrasenia");
	 return false;
 }
 else if(nomb.length>25){
	 alert("El nombre es muy largo");
	 return false;
 }else if(expresionn.test(nomb)){
	 alert("La nombre no es valido");
	 return false;
 }
 else if(emai.length>45){
	 alert("El email es muy largo");
	 return false;
 }else if(!expresion.test(emai)){
	 alert("El email no es valido");
	 return false;
 }
 else if(passw.legth>25){
	 alert("La contrasenia es muy larga");
	 return false;
 }else if(expresionnn.test(passw)){
	 alert("La contrasenia no es valida");
	 return false;
 }
 
}
 
 



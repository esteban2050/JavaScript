//--------EVENTOS----------

function evento(arg){
    console.log("me dispare");
    console.log(arg);
}

function boton(arg){
    console.log("me dispare");
    console.log(arg);
}

function botonPosiciones(arg){
    console.log("me dispare en la posicion x: ", arg.x, " y en la posicion y: ", arg.y);
    //dependiendo donde se de click, arroja las posicion en X y Y
}

var objeto = document.getElementById("objDemo");
var objetoBoton = document.getElementById("boton");

objeto.addEventListener("keypress",evento)
console.log(objeto);

//objetoBoton.addEventListener("click",boton)
//console.log(objetoBoton);

objetoBoton.addEventListener("click",botonPosiciones)
console.log(objetoBoton);


//--------Evento On submit-------
//No es viable crear este metodo, debio a que ya hay librerias que hacen este tipo de validaciones.
function validar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;

    if(nombre.length < 1){
        return false; 
    }

    if(apellido.length < 1){
        return false; 
    }

    return true;
}

//Para obtener los parametros de la URL

console.log(window.location.search);
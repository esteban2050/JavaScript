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
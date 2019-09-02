//onmousedown: es cuando la persona presiona el click/cuando lo unde
document.onmousedown = function(arg){
    if(arg.button === 2){
        alert('No se puede hacer click derecho');
        return;        
    }
    console.log( "No hay problema" );
}

//onmousedown: es cuando la persona suelte el click
document.onmouseup = function(){

    var texto = window.getSelection().toString(); //para intetnet explorer, es una linea de codigo diferente
    console.log(texto);
}
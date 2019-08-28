function crearCookies( nombre,valor ){

    valor = escape(valor); //Cambia los valores o caracteres especiales que pueedn darnos problemas a su version HTML
    var hoy = new Date();
    hoy.setMonth (hoy.getMonth + 1);
    document.cookie = nombre+"="+ valor + ";expires=" + hoy.toUTCString()+";"; // la cookie vencera en un mes
}

var demo = "123;123*123'123/ 123"
console.log( demo );
console.log( escape( demo ));
console.log( unescape( escape( demo ))); //Sirve para recuperar los datos originales despues de haberles aplicado el metodo escape

 function borrarCookie( nombre ){

    var hoy = new Date();
    hoy.setMonth (hoy.getMonth - 1);
    document.cookie = nombre+"=x;expires=" + hoy.toUTCString()+";"; // la cookie vencera en un mes
 }


 function getCookie( nombre ){

    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);

    for ( var i = 0; i < cookieArr.length; i++) {
        
        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if(parArr[0] === nombre){
            return unescape(parArr[1]);
        }
    }

    return undefined;
 }
 //Crear cookie
 crearCookies("nombre", "Esteban");
 crearCookies("correo", "Esteban@hotmail.com");
//Borrar cookie
borrarCookie("nombre");
//obtener el valor de la cookie
getCookie("nombre");

//console.log(cookies);
/*
function crearPersona( nombre, apellido ){

    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona();
console.log(persona.nombre);
console.log(persona.apellido);

function crearFuncion(){
    return function(nombre){
        console.log("Me creo " + nombre);
    }
}

var nuevaFuncion = crearFuncion();
nuevaFuncion(persona.nombre);

//A continuacion se vera como podemos asignarle a un metodo, propiedades y funciones, debido a que una funcion
//es un objeto, por lo tanto permite agregarle propiedades y funciones.

//OBJETOS:
function a() {

    console.log("Esta es la funcion a");
}

a();
a.nombre = "Juan";
a.direccion = {
    pais: "Colombia",
    ciudad: "Medellin",
    edificio : {
        piso: "800",
        nobre: "edificio miquitos"
    } 
}

//---------------METODOS Y OBJETO THIS----------:
var persona = {
    nombre: "Juan",
    apellido: "Lopez",
    imprimirNombre: function() {
        console.log(this.nombre + " " + this.apellido); //Para acceder a las propiedades internas del objeto, lo hacemos mediante el this
    },
    direccion: {
        pais: "Colombia",
        obtenerPais : function(){
            
            var self = this;
            
            var nuevaDireccion = function() {
                console.log("La direccion es en: " + self.pais);
                console.log(self);
            } 

            nuevaDireccion();
        }
    },
    padre: {
        nombrePadre: "Lazaro",
        apellido: "Lopez",
        fechaNacimiento: {           
            mes:"Agosto",
            dia:06            
        },
        obtenerFelicitaciones: function(){    
            var self = this;       
            var imprimirFelicitacionesPadre = function(){
                console.log(self.nombrePadre);
                console.log("Feliz cumple años a: " + self.nombrePadre);
            }
            imprimirFelicitacionesPadre();
        }
    }
};

persona.nombre = "Esteban";
persona.imprimirNombre();
persona.direccion.obtenerPais();
persona.padre.obtenerFelicitaciones();

//-------------LA PALABRA RESERVADA: new.

function Persona(nombre, apellido, ciudad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 22;
    this.ciudad = ciudad;
    this.imprimirPersona = function(){
        imprimirNombreCompleto(this.nombre, this.apellido) + " " + imprimirEdad(this.edad);
        
        return "Y vive en " + this.ciudad;        
    }

    function imprimirNombreCompleto(nombre, apellido){
        return console.log("La persona " + nombre + " " + apellido);                
    }
    
    function imprimirEdad(edad){
        return console.log("Tiene " + edad + " años de edad.");                
    }
}

var persona1 = new Persona("Esteban", "Lopez", "Medellín");
var persona2 = new Persona("Cecilia", "Giraldo", "Medellín");
var persona3 = new Persona("Lazaro", "Lopez", "Envigado");

console.log(persona1.imprimirPersona());
console.log(persona2.imprimirPersona());
console.log(persona3.imprimirPersona());

//----------------------PROTOTIPOS JAVASCRIPT

function Persona(){
    this.nombre = "Esteban";
    this.apellido = "Lopez";
    this.edad = 22;
    this.pais = "Colombia";    
}

Persona.prototype.imprimirInfo = function(){
    console.log(this.nombre + " " + this.apellido + " (" + this.edad + ")" )
}

var juan = new Persona();

console.log(juan);

//--------FUNCIONES ANONIMAS ---------------
//1
( function(){
    var a = 10;
    console.log(a);

    a = function(){
        a=20;
        return a;
    }();
    console.log(a);
})();
//2 
function ejecutarFuncion( fn ){
    if(fn()===1){
        return true;
    }else{
        return false;
    }
    return true;
};

console.log(
    ejecutarFuncion(function(){
        console.log("Funcion anonima");
        return 1;
    })
);

//------FUNCIONES typeof AND instanceof
//-------------------------------------1 EJEMPLO--------------------
function identifica( param ){
    if( typeof param == "function" ){
        param();
    }else{
        console.log("No es una funcion anonima");
    }    
}

identifica(function(){
    console.log("Hola");
});

//--------------------------------------2 EJEMPLO.-----------------
function identifica( param ){
    if(param instanceof Persona){
        console.log( param instanceof Persona);  //retorna un boleano
        //Con el instanceof es como si fuera un === , valida el tipo del param con respecto al objeto que se declara en la parte dercha, en este caso el objeto tipo persona.
        console.log("Es tipo Persona");
    }else{
        console.log("no es tipo Persona");
    }
}
function Persona(){
    this.nombre = "Esteban";
    this.edad = 22;
}

var juan = new Persona();

identifica(juan);

//-----------ARREGLOS---------
var arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[0],arr[2],arr[4]);

arr.reverse();
console.log(arr);

arr = arr.map(function(elem){ //La funcion map permite aplicarle una funcionalidad a cada elemento del array
    elem *= elem;
    return elem;
}); 
console.log(arr);

arr = arr.map( Math.sqrt ); //A cada valor del arreglo se le aplicara raiz cuadrada.
console.log( arr );

arr = arr.join("|"); //Para indicar por que caracter se desea separar cada elemento, en este caso quedaria: [1|2|3..]
console.log( arr );

arr = arr.split("|"); //Para separar los elementos del array cada vez que encuentre el elemento "|"
console.log( arr );

//Agregar elementos al array= push: despues de los elementos, y unshift: al inicio de los elementos.
arr.push("6");
console.log( arr );

arr.unshift("0");
console.log( arr );

console.log( arr.toString() ); //Poner la representacion textual del arreglo.   

var elimine = arr.pop(); //Agarra el ultimo elemento y lo elimina
console.log( arr, elimine );

arr.splice( 1, 1, "10" ); // el primer parametro indica desde donde empieza a cortar, el segundo parametro indica cuantos elementos quiero cortar apartir del inicio
// y los otros parametros entre comillas significan los numero que anexare despues de la posicion indicada en los dos primeros parametros
console.log( arr );

arr.slice( 0,2 ); //sirve para cortar el array,primer parametro indica la posicion de inicio y el segundo parametro, indica hasta que posicion deseo cortar del array.

//-------------ARGUMENTOS-------------

var arguments = 10;

function miFuncion(a,b,c,d){
    console.log(arguments); //Va imprimir lo que se envie por parametro en la invocacion, pero no necesita ni de los parametros que se definen en el metodo.
}

miFuncion(10,20,30,40); 

//Cuando imprime NaN quiere decir que no es tipo numerico, por ejemplo una variable con el valor undefined, y se va sumir con un entero, saca error debido a eso.

//-------SOBRECARGA DE OPERADORES-------- 
function crearProducto(nombre, precio){
    nombre = nombre || "sin nombre";
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precio: ", precio);
}

function crearProducto100(nombre){
    crearProducto(nombre, 100);
}

function crearProductoCamisa(precio){
    crearProducto("Camisa" ,  precio);
}
crearProducto("Lapiz");
crearProducto100("corrector");
crearProductoCamisa(50);

//-----------FUNCIONES Y SU CONTEXTO--------

function crearFunciones(){

    var arr = [];
    var numero = 1;

    for (var numero = 1; numero <= 3; numero++){
        arr.push(
            (function(numero){
            
                return function(){
                    console.log(numero);
                }
            })(numero)
        );
    }

   return arr;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2](); 

//------------OBJETO NUMERO--------
var a = 10.5478878;
a.toFixed(2); // el parametro hace referencia a la cantidad de decimales que retornara 
console.log( a ); // 10.54

a = 10.5478878;
a.toPrecision(4); //el parametro hace referencia  ala cantidad de decimales que desapareceran
console.log( a ); // 10.547
*
//------------OBJETO BOOLEANO--------
var a = new Boolean();
console.log ( a ); // Valor por defecto: False  

var a = new Boolean("8"); //se puede cualquier parametro como cadena y siempre retornara true: "sdsdsd","7","true"
console.log ( a ); //Retornara un true debido a que es un string

var a = new Boolean(1); // 1 : true ; 0 : false
console.log ( a ); // Numerico, retornara un true or false dependiendo su valor

//-----------------OBJETO STRING------------

var a = new String("esteban lopez");
console.log(a);

console.log(a.toUpperCase);
console.log(a.toLowerCase);

var i = a.indexOf("e"); //Retorna la posicion donde se encuentra esa letra
console.log("la letra: " + i);

var i = a.lastIndexOf("n"); //Retorna la posicion de la ultima posicion que vio esa latra situada en esa posicion.
console.log("la letra: " + i);

var nombre = a.substring(2);
console.log(nombre); //teban

nombre = a.substring(2,4); //Primer parametro indica desde donde empieza a acotar y el segundo indica donde termina
console.log(nombre); //te

nombre = a.substr(2,3); //Primer parametro indica desde donde empieza a acotar y el segundo indica cuantos caracteres coge apartir de ahi
console.log(nombre); //teb

//Si deseo capturar solo la primera palabra, en este caso "esteban", se tendria que hacer con un indexOf donde se indique
//que empiece desde 0 (osea el inicio), hasta que encuentre un espacio indexxOf(" ")

nombre = a.substr(0, a.indexOf(" "));
console.log(nombre); //esteban

var split = a.split(" "); //.split() separa palabras por algn caracter que se indique, en este caso por espacio 
console.log(split); // ["esteban","lopez"] 

//--------OBJETO DATE----------
//Tres maneras de inicializar fechas en javascript
var hoy = new Date();
var fMili = new Date(1);
var fFija = new Date(anio, mes, dia, hora, min, seg, mili);

console.log(hoy.getFullYear()); //Obtiene la fecha
console.log(hoy.getDate()); //Retorna el dia
console.log(hoy.getHours()); //Retorna las horas
console.log(hoy.getMilliseconds()); //Retorna los milisegundos de la hora
console.log(hoy.getMonth()); //Retorna el mes en base 0; es decir: enero:0,febrero:1,marzo:2,abril:3...
console.log(hoy.getSeconds()); //Retorna los segundos de la hora
console.log(hoy.getTime()); //Retorna la representacion numerica de una fecha en milisegundos

//---------OPERACIONES CON FECHAS---------
var fecha = new Date(2019/8/16);

console.log( fecha );

//Para sumar dias
fecha.setDate( 20 ); //Hay setHousers,setYears.....

//Modificacion al prototipo:
Date.prototype.sumarDias = function( dias ){
    this.setDate( this.getDate() + dias );
    return this;
}

Date.prototype.sumarAnios = function( anios ){
    this.setUTCFullYear( this.getFullYear() + anios );
    return this;
}

console.log( fecha );
console.log (fecha.sumarDias(4));
console.log (fecha.sumarAnios(2));

//--------OBJETO MATH-------
var PI = Math.PI;
var E = Math.E;

var num1 = 10.456789;
console.log(num1);
console.log("Redondear: " + Math.round(num1)); //Para redondear los numeros
console.log("Obtener numero entero: " + Math.floor(num1)); //Para obtener el numero entero  de un decimal sin redondeo

function randomEntre( min, max ){
    return Math.floor( Math.random() * (max-min + 1) + min);
}

console.log(randomEntre(1,6));
console.log("Raiz cuadrada: " + Math.sqrt(10));
console.log("Elevar al Exponente: " + Math.pow(7,2));

//-----------EXPRESIONES REGULARES---------
var reg1 = RegExp("a");
var reg2 = /a/;
var texto = "Hola Mundo";

    var arr = texto.match( reg1 ); //regresara un arreglo si en el texto encuentra la palabra definida como la expresion rgular, sino, regresara Null 
console.log( arr );

arr = texto.match( /^.o/ ); //Traera cualquiera dos letras siempre y cuando su proxima la segunda de ellas, sea una 'o'.
console.log( arr );
arr = texto.match( /[a-z]/ ); //Para encontrar rangos, esto es key sensitive, asi que solo encontrara letras de la a a la z pero en minuscula 
//Ej1: /[a-zA-Z]/ (cuando encuentre cualquier letra), 
//Ej2: /[0-9]/ (cuando encuentre un rango de numeros desde el 0 al 9), 
//Ej3: /[0189]/ (cuando se desea buscar numeros especificos),
//Ej4: /^H[aeiou]/ (la h y que le siga cualquier bocal),
//Ej5: /[\s]/ (Busca cualquier separacion)
//Ej5: /[\w]/ (Busca cualquier caracter, es equivalente a tener /[a-zA-Z0-9]/)

//---------------------COMENTARIOS EN JAVASCRIPT Y ESPACIADO.----------
var arr = ["esteban", {
    nombre : "juan",
    apellido : "lopez",
    getNombre(){
        return this.nombre + " " + this.apellido
    }},true, function(){
        console.log(this);
    }];
//En esta sesion se explica la forma de hacer comentarios, los cuales se pueden hacer de dos formas: comentarios en linea o multilinea; cuando se desea subir el codigo de forma que 
//se desea que sea publico para los demas, se puede realizar una compresion de codigo con algunos programas. Alguno de ellos puede ser: https://htmlcompressor.com/compressor/

//---------------------------MANEJO DE ERRORES------------------------
    //Ejemplo 1 : validaciones donde se manda diferentes errores dependiendo la condicion
try{
    var a = 100;

        if (a == 100){
            throw 'que mal';
        }else{
            throw 'oh oh!';
        }
        console.log("El valor de a es: " + a );
}   catch(e){
        if(e == "que mal" ){
            console.log("Error tipo 1");
        }if(e == "oh oh!" ){
            console.log("Error tipo 2");
        }
}
finally{
    console.log("hola");
}

    //Ejemplo 2 : mandando el error como nueva instancia
try {
    
    throw new Error('Error tipo 1');
    console.log("Esta parte nunca se ejecuta");
} catch (e) {
    console.log("Parte del catch " + e);
}
    //Ejemplo 3 : Enviando el error como tipo objeto
try {
    
    throw {
        nombreError: "Error tipo 1",
        accion: "Salir corriendo a echarle agua al servidor",
        codeError:1
    }
} catch (e) {
    console.log(e);
    console.log(e.nombreError);
    console.log(e.accion);
    console.log(e.codeError);
}
    
    //Ejemplo 4 : Enviando el error como una funcion
try {
    
    throw function(){
        console.log("Funcion del throw....");
    }
} catch (e) {

    e(); //Invocacion del metodo error.
}

//------FUNCIONES ESPECIALES: call(),Apply(), Bind()----------

var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function(){
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}

var carro2 = {
    color: "Rojo",
    marca: "Toyota",    
}

console.log( carro.imprimir() );

var logCarro = function( arg1, arg2){
    console.log("Carro: " + this.imprimir()); // Con los metodos bind,call se puede acceder a este this aunque no este dentro del mismo contexto
    console.log("Agumentos: ", arg1,arg2)
    console.log("==================")
}

var logModeloCarro = logCarro.bind( carro ); //bind sirve para establecer el objeto y poder apuntar el this a ese objeto
logModeloCarro("abc","xyz");

logModeloCarro.call( carro,"123","456" );//el primer parametro es a lo que queremos que apunte el this y seguido los parametros que recibe el metodo
logModeloCarro.apply( carro,["123","456"] );//este metodo solo espera dos parametros: el primer parametro es a lo que queremos que apunte el this y seguido es un arreglo que puede contener x de parametros dentro

//la funcionalidad de estos tres metodos es para funciones prestadas, ejemplo:
console.log(carro.imprimir().call(carro2));
*/
//--------------- JSON--------------

var objetoJs = {
    nombre: "Esteban",
    edad: 22
};

console.log("Objeto literal ", objetoJs);

var jsonString = JSON.stringify(objetoJs);
console.log(jsonString);

var objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson);

console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);
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

//METODOS:
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

//-------------La palabra reservada new.

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

//--------FUNCIONES ANONIMAS
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
crearProductoCamisa(50);*/

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
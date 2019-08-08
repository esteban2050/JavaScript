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
console.log(persona3.imprimirPersona());*/

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
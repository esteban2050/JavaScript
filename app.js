
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
// Crear interfaces
(() => {

    // Cree una interfaz para validar el auto (el valor enviado por parametro)
    interface AutoI {
        encender:Boolean;
        velocidadMaxima: number;
        acelerar: () => void
    }

    const conducirBatimovil = ( auto:AutoI ):void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    }
      
    const batimovil:AutoI = {
        encender:false,
        velocidadMaxima:0,
        acelerar(){
            console.log("...... gogogo!!!");
        }
    }
      
    // Cree una interfaz con que permita utilzar el siguiente objeto
    // utilizando propiedades opcionales
    interface GuasonI {
        reir?: boolean;
        comer?: boolean;
        llorar?: boolean;
    }
    
    const guason = {
        reir: true,
        comer:true,
        llorar:false
    }
    
    const reir = ( guason:GuasonI ):void => {
        if( guason.reir ){
            console.log("JAJAJAJA");
        }
    }
      
      
      // Cree una interfaz para la siguiente funcion
      interface CiudadGoticaI {
          (value: string[]):number
      }
      
      const ciudadGotica:CiudadGoticaI = ( ciudadanos:string[] ):number => {
        return ciudadanos.length;
      }
      
      // Cree una interfaz que obligue crear una clase
      // con las siguientes propiedades y metodos
      
      /*
        propiedades:
          - nombre
          - edad
          - sexo
          - estadoCivil
          - imprimirBio(): void // en consola una breve descripcion.
      */
      interface PersonaI {
          nombre: string;
          edad: number;
          sexo: string;
          estadoCivil: string;
          imprimirBio: () => void
      }

      class Persona implements PersonaI{
        constructor(
            public nombre:string,
            public edad: number,
            public sexo: string,
            public estadoCivil: string
        ) {}

        imprimirBio(): void{
            console.log("hola")
        }
    }
})()

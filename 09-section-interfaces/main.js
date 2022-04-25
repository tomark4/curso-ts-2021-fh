"use strict";
(() => {
    const heroe = {
        name: 'Clark',
        nickname: "Superman",
        power: 100,
        timeTravel: (value) => {
            return value;
        }
    };
    class Marvel {
        constructor(name, nickname, power) {
            this.name = name;
            this.nickname = nickname;
            this.power = power;
        }
        timeTravel(value) {
            return value;
        }
    }
    const heroe1 = new Marvel("Natasha", "black widow", 200);
    console.log(heroe.timeTravel("go fast"), heroe1);
    const sum = (a, b) => {
        return a;
    };
    console.log(sum(2, 2));
})();
// Crear interfaces
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor(nombre, edad, sexo, estadoCivil) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log("hola");
        }
    }
})();

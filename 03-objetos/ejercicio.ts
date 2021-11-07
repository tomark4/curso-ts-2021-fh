(() => {

type Auto = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number,
    disparar?: () => void
}

// Objetos
const batimovil:Auto = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
};

const bumblebee:Auto = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
        console.log("Disparando");
    }
};

type BadGuy = {
    nombre: string;
    edad: number|undefined;
    mutante: boolean;
}

// Villanos debe de ser un arreglo de objetos personalizados
const villanos: BadGuy[] = [
    {
        nombre:"Lex Luthor",
        edad: 54,
        mutante:false
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }
];

type CharlesT = {
    poder: string;
    estatura: number;
}

type ApocalipsisT =  {
    lider: boolean;
    miembros: string[]
}

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles: CharlesT = {
    poder:"psiquico",
    estatura: 1.78
};

const apocalipsis: ApocalipsisT = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: CharlesT|ApocalipsisT;

mystique = charles;
mystique = apocalipsis;

})()

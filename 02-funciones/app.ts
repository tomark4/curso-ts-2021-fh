(() =>{
    const hero: string = 'Flash';

    function heroName():string{
        return hero;
    }

    const run = ():string => {
        return 'Running...';
    }

    const hero1: string = heroName();

    console.log({1: run(), 2: heroName()});

    // argumentos obligatorios

    const fullName = (firstname: string, lastname: string):string => {
        return `Hola, ${firstname} ${lastname}`
    }

    const myName = fullName('Jose','Fernández');

    console.log({myName});

    // argumentos opcionales

    const fullNameInverse = (first: string, last?: string): string => {
        return `${first} ${last || 'none'}`.split("").reverse().join("");
    }

    console.log(fullNameInverse("jose", "quintero"));

    // parametros por defecto

    const suma = (a:number, b:number, c:number = 30):number => {
        return a + b + c;
    }

    console.log({total: suma(2,3, 50)});


    // parametros rest

    const superFullName = (name:string, ...rest:string[]):string => {
        return `${name} ${rest.join(" ") }`;
    }

    console.log(superFullName('Jose','Quintero','Fernandez'))
}) ()

( () =>{

    // features ES6

    // use always const
    const getFullName = (name:string, lastName:string):string => {
        return `${name} ${lastName}`
    }
    
    console.log(getFullName("jose","quintero"));

    interface EmppleadoI {
        name: string;
        lastName: string;
        edad: number;
        email: string;
        nationality: string;
        funds: number;
    }

    const empleado:EmppleadoI = {
        name: "jose",
        lastName: "quintero",
        edad: 39,
        email: "jose@jotta.com",
        nationality: "ve",
        funds: 10000
    }
    
    // destructuracion objeto
    const { name, lastName, funds } = empleado;

    console.log({
        name: name.toUpperCase(),
        lastName: lastName.toLowerCase(),
        funds: funds.toFixed(2)
    });

    // destructuracion array
    const heroes:string[] = ['spiderman','batman','batwoman hero'];

    const  [spiderman,,batwoman] = heroes;

    console.log({spiderman,batwoman});

    // ciclo for-of
    type HeroT = {
        name: string;
        weapon: string;
    }

    const heroes2: HeroT[] = [
        {name: "lorem", weapon: "karate"},
        {name: "lorem", weapon: "shield"},
        {name: "lorem", weapon: "laser"},
        {name: "lorem", weapon: "hammer"},
    ];

    for(let hero of heroes2){
        console.log(hero.weapon)
    }

    // class in typescript
    class User {

        name:string;
        lastName:string;
    
        constructor(name:string, lastName:string){
            this.name = name;
            this.lastName = lastName;
        }

    }

    class Customer extends User{

        constructor(name:string, lastName:string){
            super(name, lastName);
        }
        
        getFullName(){
            return this.name + " " + this.lastName;
        }
    }

    const customer1 = new Customer("Jhon","Doe");

    console.log(`My name: ${customer1.getFullName()}`);    

})()
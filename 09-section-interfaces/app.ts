(() => {

    interface Hero {
        name: string;
        nickname: string;
        power: number;
        address?: Address,
        timeTravel: (value:string) => string
    }

    interface Address {
        country: string;
        city:string;
        zipcode: string;
    }

    const heroe: Hero = {
        name: 'Clark', 
        nickname: "Superman",
        power: 100,
        timeTravel: (value:string):string => {
            return value;
        }
    }

    class Marvel implements Hero {

        constructor(public name: string, public nickname: string, public power: number){}

        timeTravel(value: string) {
            return value; 
        }
    }

    
    const heroe1 = new Marvel("Natasha","black widow", 200);

    console.log(heroe.timeTravel("go fast"), heroe1);
    
    // interfaz para funciones
    interface OperationI{
        (a:number,b:number): number;
    }
    const sum:OperationI = (a:number,b:number): number => {
        return a;
    }

    console.log(sum(2,2))
})()
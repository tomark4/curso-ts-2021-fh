(() => {
    // class in typescript
    
    class User {
        constructor(
            public name:string, 
            public lastName:string, 
            public dayOfBirth?: string,
            public age?: number,
            public nickname?:string,
        ){ }

        static getAge(){
            return "hola soy static";
        }

        getFullName():string{
            return `${this.name} ${this.lastName}`;
        }

        getProfile(){
            console.log("get profile method!!")
        }
    }

    class Employee extends User{

        constructor(
            name:string, 
            lastName: string, 
            public salary: number, 
            public active:boolean
        ){
            super(name, lastName)
            console.log("constructor employee called")
        }

        calculateVacationsDays():number{
            return 200
        }

        getRealName(){
            return super.getFullName();
        }

        // getter
        get fullName() {
            return `${this.name}  ${this.lastName}`
        }

        // setter
        set nameUser(value: string){
            this.name = value;
        }
    }

    const employee = new Employee("tony", "stark", 1000, true);
    employee.nameUser = "jose"
    console.log(employee.getRealName(), employee.fullName);


    abstract class Auto {
        constructor(public brand: string, public model: string){}

        turnOn(){
            console.log("auto on")
        }   

        turnOff(){
            console.log("auto off")
        }
    }

    class Chevy extends Auto {

    }

    const auto = new Chevy('Toyota',"4runner")
    console.log(auto);
})()
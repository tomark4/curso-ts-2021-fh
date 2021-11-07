(() => {
    // type
    type Hero = {
        name: string,
        lastName: string,
        colors: string[],
        age: number,
        powers: string[],
        fullName?: () => string
    }

    let flash: Hero = {
        name: 'Barry',
        lastName: 'Allen',
        colors: ['red','yellow'],
        age: 24,
        powers: ['super velocity','time travel'],
        fullName: function(){
            return `${this.name} ${this.lastName}`;
        }
    }

    let superman: Hero = {
        name: 'Clark',
        lastName: 'Ken',
        colors: ['blue','red'],
        age: 36,
        powers: ['Super strenght','Super speed','Flight'],
        fullName: function(){
            return `${this.name} ${this.lastName}`;
        }
    }

    console.log({flash, superman})

    // union type

    let myVariable: (string | number | Hero);

    myVariable = 'Jose'
    console.log({myVariable});
    myVariable = 20
    myVariable = {
        name: 'Bruce',
        lastName: 'Wayne',
        colors: ['black'],
        age: 40,
        powers:['Rich','Martials arts']
    }
}) ()

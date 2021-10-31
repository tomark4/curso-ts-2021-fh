(() => {
    // booleans
    let isSuperHero:boolean;
    let isBatman = false;

    isSuperHero = isBatman ? true : false;
    console.log({isSuperHero, isBatman});

    // numbers
    let price:number = 9.99;
    let age = 55;
    let pi = 3.14444;
    const total:number = 500;

    const rooms = Number("123A"); // esto daria NaN not a number

    if(total > price){
        console.log("You win");
    } else {
        console.log("You loose");
    }

    console.log({price, age, pi, total, rooms});

    // strings
    let name = "Jose";
    let lastName = 'Quintero';
    let address:string = `Caracas, Venezuela ${name} ${lastName}`;

    console.log({name: name[1]?.toUpperCase() || "J", lastName, address});
})()

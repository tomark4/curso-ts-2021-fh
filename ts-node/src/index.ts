//import { Hero as SuperHero } from "./classes/Hero";
import * as SuperHero from "./classes/Hero";
import powers from "./data/power";
import { genericFunction, genericFunctionArrow, printObj } from "./generics/generics";


// const heroe = new SuperHero('tony',100,40)
const heroe = new SuperHero.Hero('tony',100,40)

const poder = powers[0].desc;

console.log({heroe, poder})

printObj("test")
printObj(new Date())
printObj({name: "jose"})
printObj([1,2,3])
printObj(false)

console.log(genericFunction(98000).toFixed(2));
console.log(genericFunctionArrow("hola").toUpperCase());







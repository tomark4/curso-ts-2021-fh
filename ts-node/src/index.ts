//import { Hero as SuperHero } from "./classes/Hero";
import * as SuperHero from "./classes/Hero";
import powers from "./data/power";


// const heroe = new SuperHero('tony',100,40)
const heroe = new SuperHero.Hero('tony',100,40)

const poder = powers[0].desc;

console.log({heroe, poder})






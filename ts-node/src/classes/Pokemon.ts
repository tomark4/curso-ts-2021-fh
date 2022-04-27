function printToConsole(constructor:Function){
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false):Function => {
    if (print) {
        return printToConsole;
    } else {
        return  () => {}
    }
}

const blockPrototype = function(constructor: Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

// factory decorator
// devuelve una funcion que se tiene que ejecutar
const checkValidPokeId = () => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        // console.log({target, propertyKey, descriptor})
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) =>  {
            if(id < 1 || id > 800){
                return console.error("Pokemon id must have between 1-800")
            } else {
                originalMethod(id)
            }
        }
    }
}

function readonly(isWritable: boolean = true):Function{
    return function(target: any, propertyKey: string){
        console.log({target, propertyKey})
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this)
                return 'jose';
            },
            set(this, value){
                console.log(this, value)
                Object.defineProperty(this, propertyKey, {
                    value,
                    writable: !isWritable
                })
            }
        }
        return descriptor;
    }
}

@blockPrototype
@printToConsoleConditional( true )
export class Pokemon {

    @readonly()
    public publicApi: string = "https://pokeapi.co"

    constructor(public name: string){}

    @checkValidPokeId()
    savePokeToDb(id: number){
        console.log("poke saved!");
    }
}
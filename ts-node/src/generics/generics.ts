

export const printObj = (argument: any) => {
    console.log(argument);
}

export function genericFunction<T>(arg:T){
    return arg;
}

export const genericFunctionArrow = <T>(arg:T) => arg;
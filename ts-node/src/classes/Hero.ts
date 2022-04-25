import powers, { PowerI } from "../data/power";

export class Hero{

    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power(): string{
        return powers.find((power:PowerI) => power.id === this.powerId)?.desc || 'not found';
    }
}
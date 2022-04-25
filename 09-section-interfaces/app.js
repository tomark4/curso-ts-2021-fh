"use strict";
(() => {
    const heroe = {
        name: 'Clark',
        nickname: "Superman",
        power: 100,
        timeTravel: (value) => {
            return value;
        }
    };
    class Marvel {
        constructor(name, nickname, power) {
            this.name = name;
            this.nickname = nickname;
            this.power = power;
        }
        timeTravel(value) {
            return value;
        }
    }
    const heroe1 = new Marvel("Natasha", "black widow", 200);
    console.log(heroe.timeTravel("go fast"), heroe1);
    const sum = (a, b) => {
        return a;
    };
    console.log(sum(2, 2));
})();

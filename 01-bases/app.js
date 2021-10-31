"use strict";
(function () {
    var _a;
    // booleans
    var isSuperHero;
    var isBatman = false;
    isSuperHero = isBatman ? true : false;
    console.log({ isSuperHero: isSuperHero, isBatman: isBatman });
    // numbers
    var price = 9.99;
    var age = 55;
    var pi = 3.14444;
    var total = 500;
    var rooms = Number("123A"); // esto daria NaN not a number
    if (total > price) {
        console.log("You win");
    }
    else {
        console.log("You loose");
    }
    console.log({ price: price, age: age, pi: pi, total: total, rooms: rooms });
    // strings
    var name = "Jose";
    var lastName = 'Quintero';
    var address = "Caracas, Venezuela " + name + " " + lastName;
    console.log({ name: ((_a = name[1]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "J", lastName: lastName, address: address });
})();

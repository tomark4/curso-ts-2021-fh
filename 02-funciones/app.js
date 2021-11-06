"use strict";
(function () {
    var hero = 'Flash';
    function heroName() {
        return hero;
    }
    var run = function () {
        return 'Running...';
    };
    var hero1 = heroName();
    console.log({ 1: run(), 2: heroName() });
    // argumentos obligatorios
    var fullName = function (firstname, lastname) {
        return "Hola, " + firstname + " " + lastname;
    };
    var myName = fullName('Jose', 'Fernández');
    console.log({ myName: myName });
    // argumentos opcionales
    var fullNameInverse = function (first, last) {
        return (first + " " + (last || 'none')).split("").reverse().join("");
    };
    console.log(fullNameInverse("jose", "quintero"));
    // parametros por defecto
    var suma = function (a, b, c) {
        if (c === void 0) { c = 30; }
        return a + b + c;
    };
    console.log({ total: suma(2, 3, 50) });
    // parametros rest
    var superFullName = function (name) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return name + " " + rest.join(" ");
    };
    console.log(superFullName('Jose', 'Quintero', 'Fernandez'));
})();

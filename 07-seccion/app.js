"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // features ES6
    // use always const
    var getFullName = function (name, lastName) {
        return name + " " + lastName;
    };
    console.log(getFullName("jose", "quintero"));
    var empleado = {
        name: "jose",
        lastName: "quintero",
        edad: 39,
        email: "jose@jotta.com",
        nationality: "ve",
        funds: 10000
    };
    // destructuracion objeto
    var name = empleado.name, lastName = empleado.lastName, funds = empleado.funds;
    console.log({
        name: name.toUpperCase(),
        lastName: lastName.toLowerCase(),
        funds: funds.toFixed(2)
    });
    // destructuracion array
    var heroes = ['spiderman', 'batman', 'batwoman hero'];
    var spiderman = heroes[0], batwoman = heroes[2];
    console.log({ spiderman: spiderman, batwoman: batwoman });
    var heroes2 = [
        { name: "lorem", weapon: "karate" },
        { name: "lorem", weapon: "shield" },
        { name: "lorem", weapon: "laser" },
        { name: "lorem", weapon: "hammer" },
    ];
    for (var _i = 0, heroes2_1 = heroes2; _i < heroes2_1.length; _i++) {
        var hero = heroes2_1[_i];
        console.log(hero.weapon);
    }
    // class in typescript
    var User = /** @class */ (function () {
        function User(name, lastName) {
            this.name = name;
            this.lastName = lastName;
        }
        return User;
    }());
    var Customer = /** @class */ (function (_super) {
        __extends(Customer, _super);
        function Customer(name, lastName) {
            return _super.call(this, name, lastName) || this;
        }
        Customer.prototype.getFullName = function () {
            return this.name + " " + this.lastName;
        };
        return Customer;
    }(User));
    var customer1 = new Customer("Jhon", "Doe");
    console.log("My name: " + customer1.getFullName());
})();

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
    // class in typescript
    var User = /** @class */ (function () {
        function User(name, lastName, dayOfBirth, age, nickname) {
            this.name = name;
            this.lastName = lastName;
            this.dayOfBirth = dayOfBirth;
            this.age = age;
            this.nickname = nickname;
        }
        User.getAge = function () {
            return "hola soy static";
        };
        User.prototype.getFullName = function () {
            return this.name + " " + this.lastName;
        };
        User.prototype.getProfile = function () {
            console.log("get profile method!!");
        };
        return User;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, lastName, salary, active) {
            var _this = _super.call(this, name, lastName) || this;
            _this.salary = salary;
            _this.active = active;
            console.log("constructor employee called");
            return _this;
        }
        Employee.prototype.calculateVacationsDays = function () {
            return 200;
        };
        Employee.prototype.getRealName = function () {
            return _super.prototype.getFullName.call(this);
        };
        Object.defineProperty(Employee.prototype, "fullName", {
            // getter
            get: function () {
                return this.name + "  " + this.lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "nameUser", {
            // setter
            set: function (value) {
                this.name = value;
            },
            enumerable: false,
            configurable: true
        });
        return Employee;
    }(User));
    var employee = new Employee("tony", "stark", 1000, true);
    employee.nameUser = "jose";
    console.log(employee.getRealName(), employee.fullName);
    var Auto = /** @class */ (function () {
        function Auto(brand, model) {
            this.brand = brand;
            this.model = model;
        }
        Auto.prototype.turnOn = function () {
            console.log("auto on");
        };
        Auto.prototype.turnOff = function () {
            console.log("auto off");
        };
        return Auto;
    }());
    var Chevy = /** @class */ (function (_super) {
        __extends(Chevy, _super);
        function Chevy() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Chevy;
    }(Auto));
    var auto = new Chevy('Toyota', "4runner");
    console.log(auto);
})();

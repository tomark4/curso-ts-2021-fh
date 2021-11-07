"use strict";
(function () {
    var flash = {
        name: 'Barry',
        lastName: 'Allen',
        colors: ['red', 'yellow'],
        age: 24,
        powers: ['super velocity', 'time travel'],
        fullName: function () {
            return this.name + " " + this.lastName;
        }
    };
    var superman = {
        name: 'Clark',
        lastName: 'Ken',
        colors: ['blue', 'red'],
        age: 36,
        powers: ['Super strenght', 'Super speed', 'Flight'],
        fullName: function () {
            return this.name + " " + this.lastName;
        }
    };
    console.log({ flash: flash, superman: superman });
    // union type
    var myVariable;
    myVariable = 'Jose';
    console.log({ myVariable: myVariable });
    myVariable = 20;
    myVariable = {
        name: 'Bruce',
        lastName: 'Wayne',
        colors: ['black'],
        age: 40,
        powers: ['Rich', 'Martials arts']
    };
})();

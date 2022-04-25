"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = function (text) {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = function (myDate) {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateDate(new Date()));

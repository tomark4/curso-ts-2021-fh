"use strict";
(function () {
    var nums = [1, 2, 3, 4, 5, 6, 'string'];
    var names = ['joseph', 'peter', 'tony'];
    names.forEach(function (value) {
        console.log({ currentHero: value.toUpperCase() });
    });
    nums.push('11');
    console.log({ nums: nums });
})();

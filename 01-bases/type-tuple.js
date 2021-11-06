"use strict";
(function () {
    // tuplas
    var hero = ['Hulk', 100, true];
    hero[1] = 50;
    hero[0] = 'jose';
    console.log({ hero: hero });
    // enums
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log({ AudioLevel: AudioLevel, currentAudio: currentAudio });
    // void
    function test() {
        console.log("Hola mundo");
    }
    var testing = function () {
        console.log("Hello world");
    };
    test();
    testing();
    // never
    // const error = (message: string):never => {
    //     // siempre regresa un error
    //     throw new Error("Error message " + message);
    // }
    // error("Lorem ");
    // null - undefined
    var isActive = undefined;
    var isAuth = null;
    isActive = false;
    console.log({ isActive: isActive, isAuth: isAuth });
})();

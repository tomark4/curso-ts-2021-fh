"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var Power;
    (function (Power) {
        Power[Power["acuaman"] = 0] = "acuaman";
        Power[Power["batman"] = 1] = "batman";
        Power[Power["flash"] = 5] = "flash";
        Power[Power["supermarn"] = 100] = "supermarn";
    })(Power || (Power = {}));
    var fuerzaFlash = Power.flash;
    var fuerzaSuperman = Power.supermarn;
    var fuerzaBatman = Power.batman;
    var fuerzaAcuaman = Power.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();

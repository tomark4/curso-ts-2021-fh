(() => {
    // tuplas
    const hero: [string, number, boolean] = ['Hulk', 100, true] ;

    hero[1] = 50
    hero[0] = 'jose'

    console.log({hero})

    // enums

    enum AudioLevel {
        min = 1, medium, max = 10
    }

    let currentAudio = AudioLevel.max

    console.log({AudioLevel, currentAudio});

    // void
    function test():void {
        console.log("Hola mundo");
    }

    const testing = ():void => {
        console.log("Hello world");
    }
    test();
    testing();
    // never

    // const error = (message: string):never => {
    //     // siempre regresa un error
    //     throw new Error("Error message " + message);
    // }

    // error("Lorem ");

    // null - undefined

    let isActive: (boolean|undefined) = undefined;
    let isAuth:boolean|null = null;

    isActive = false;
    console.log({isActive, isAuth});
}) ()

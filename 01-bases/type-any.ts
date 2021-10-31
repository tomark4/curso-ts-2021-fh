(() => {
    // any
    let value:any = 123
    const exist = false;
    let power = 0;

    value = "jose";

    let pi = 3.1424;

    console.log({
        exist,
        power: <number>power,
        value: (value as string).toUpperCase(),
        total: pi.toFixed(2)
    });
})()

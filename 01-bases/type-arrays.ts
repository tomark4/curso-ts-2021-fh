(() => {
    const nums:(string|number)[] = [1,2,3,4,5,6,'string'];

    const names:string[] = ['joseph','peter','tony']

    names.forEach( function(value: string) {
        console.log({currentHero: value.toUpperCase()});
    })
    nums.push('11');
    console.log({nums})
})();

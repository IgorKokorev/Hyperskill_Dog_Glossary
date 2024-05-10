function switchTheValues(cats) {
    cats.forEach(cat => {
        let name = cat.name;
        cat.name = cat.owner;
        cat.owner = name;

        console.log(cat.owner + " has a cat named " + cat.name + ", whose breed is " + cat.breed);
    })
}
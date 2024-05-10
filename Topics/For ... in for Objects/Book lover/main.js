let library = {
    books: {
        "first": "Brothers Karamazov",
        "second": "The Catcher in the Rye"
    }
};
for (let object in library) {
//your code
    for (let key in library[object]) {
        console.log(library[object][key]);
    }
}
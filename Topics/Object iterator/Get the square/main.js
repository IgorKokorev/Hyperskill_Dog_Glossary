function getTheSquare(arrayOfObjects) {
    arrayOfObjects.forEach(object => {
        object.square = Math.sqrt(object.source);
    });
    return arrayOfObjects;
}
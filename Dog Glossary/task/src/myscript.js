const imageId = "random_dog_image";

function getRandomImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(json => {
            // let oldImage = document.getElementById(imageId);
            // if (oldImage != null) oldImage.remove();
            // document.getElementById("content").innerHTML = "";
            let url = json.message;
            let image = document.createElement("img");
            image.src = url;
            image.id = imageId;
            document.getElementById("content").replaceChildren(image);
        })
        .catch((error) => console.log(error));
}

function getSubBreed(breed) {
    let url = "https://dog.ceo/api/breed/" + breed.toLowerCase() + "/list";

    fetch(url)
        .then(r => r.json())
        .then(json => {
                if (json.status === "error") {
                    let errorText = document.createElement("p");
                    errorText.innerText = "Breed not found!";
                    document.getElementById("content").replaceChildren(errorText);
                } else {
                    let subBreads = json.message;
                    if (subBreads.length === 0) {
                        let errorText = document.createElement("p");
                        errorText.innerText = "No sub-breeds found!";
                        document.getElementById("content").replaceChildren(errorText);
                    } else {
                        let list = document.createElement("ol");
                        subBreads.forEach(sub => {
                            let subBread = document.createElement("li");
                            subBread.innerText = sub;
                            list.appendChild(subBread);
                        });
                        document.getElementById("content").replaceChildren(list);
                    }
                }
            }
        )
        .catch(e => {
            console.log(e);
            let errorText = document.createElement("p");
            errorText.innerText = "Breed not found!";
            document.getElementById("content").replaceChildren(errorText);
        });
}

function getRandomImageByBreed(breed) {
    let url = "https://dog.ceo/api/breed/" + breed.toLowerCase() + "/images/random";
    
    fetch(url)
        .then(r => r.json())
        .then(json => {
                if (json.status === "error") {
                    let errorText = document.createElement("p");
                    errorText.innerText = "Breed not found!";
                    document.getElementById("content").replaceChildren(errorText);
                } else {
                    let url = json.message;
                    let image = document.createElement("img");
                    image.src = url;
                    image.id = imageId;
                    document.getElementById("content").replaceChildren(image);
                }
            }
        )
        .catch(e => {
            console.log(e);
            let errorText = document.createElement("p");
            errorText.innerText = "Breed not found!";
            document.getElementById("content").replaceChildren(errorText);
        });
}


function getAllBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(r => r.json())
        .then(json => {
            let list = document.createElement("ol");
            Object.entries(json.message).forEach(([breed, subBreeds]) => {
                let element = document.createElement("li");
                element.innerText = breed;
                if (subBreeds.length > 0) {
                    let subList = document.createElement("ul");
                    for (let i in subBreeds) {
                        let subElement = document.createElement("li");
                        subElement.innerText = subBreeds[i];
                        subList.appendChild(subElement);
                    }
                    element.appendChild(subList);
                }
                list.appendChild(element);
            });
            document.getElementById("content").replaceChildren(list);
        })
        .catch(e => {
            console.log(e);
            let errorText = document.createElement("p");
            errorText.innerText = "Internal Error";
            document.getElementById("content").replaceChildren(errorText);
        });
}
document.getElementById("button-random-dog").addEventListener("click", getRandomImage);

document.getElementById("button-show-breed").addEventListener("click", function () {
    let breed = document.getElementById("input-breed").value;
    getRandomImageByBreed(breed);
});

document.getElementById("button-show-sub-breed").addEventListener("click", function () {
    let breed = document.getElementById("input-breed").value;
    getSubBreed(breed);
});

document.getElementById("button-show-all").addEventListener("click", getAllBreeds);
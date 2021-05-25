console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

    function fetchImg(url) {
        fetch(url)
        .then(resp => resp.json())
        .then(data => data.message.forEach(appendDog))

    
    }

    function appendDog(dogsUrl) {
        let li = document.createElement("li");
        li.className = "dogs";

        let img = document.createElement("img");
        img.src = dogsUrl;

        li.append(img)
        document.querySelector("ul#dog-breeds").append(li);
    }

    

    const breedUrl = "https://dog.ceo/api/breeds/list/all"

    function fetchBreed(url) {
        fetch(url)
        .then(resp => resp.json())
        .then(data => secondChallenge(data.message))
    }

    function secondChallenge(object) {
        //console.log(object)
    
        for (const key in object) {
            //console.log(key);
            //console.log(object[key]);
            object[key].forEach((arr) => {
                let li = document.createElement("li");
                if (arr === "") {
                    return
                }
                else {
                    let breed = arr + " " + key;
                    li.append(breed);
                    li.addEventListener("click", () => li.style.color = "#ce42f5" )
                    document.querySelector("ul#dog-breeds").append(li);

                }
            })
        }

    }

    fetchImg(imgUrl);
    fetchBreed(breedUrl);

})




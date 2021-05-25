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

    fetchImg(imgUrl);

})


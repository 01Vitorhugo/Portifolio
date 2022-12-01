// Carousel photos (LANGUAGES)
const foto = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carousel(){
    idx++;
    if(idx > img.length - 1){
        idx = 0;
    }

    foto.style.transform = `translateX(${ - idx * 180}px)`;

}
setInterval(carousel, 1000);

// Carousel end


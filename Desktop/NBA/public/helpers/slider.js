
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const activeImage = document.getElementsByClassName("current-slider-image");

// // console.log(activeImage.length)

var slideIndex = 1;

const showSlides = (n) => {
    // console.log(n);
    const activeImage = document.getElementsByClassName("current-slider-image");
    // reset to 1
    if (n > activeImage.length) {slideIndex = 1};
    // reset to final image if index goes to negative
    if (n < 1) {slideIndex = activeImage.length};

    for(let i=0; i< activeImage.length; i++) {
        activeImage[i].style.display ="none";
    } 
    activeImage[slideIndex-1].style.display = "block";

}
showSlides(slideIndex);


//  TODO: i can't use addeventlistener because of client side memory 
//  controls
// left.addEventListener('click', nextSlide(-1));
// right.addEventListener('click', nextSlide(1));

const nextSlide = (n) => {
    showSlides(slideIndex += n);
}



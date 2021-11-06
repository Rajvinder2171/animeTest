
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const track = document.querySelector(".track");

var carouselWidth = document.querySelector(".carousel-container").offsetWidth;

window.addEventListener("resize" , function () {
  carouselWidth = document.querySelector(".carousel-container").offsetWidth;
  console.log(carouselWidth);
});

var index = 0;

next.addEventListener("click", function () {
  index++ ;
  prev.classList.add("show");
  track.style.transform = "translateX(-" + index * carouselWidth + "px)";
  if (track.offsetWidth - index * carouselWidth < carouselWidth) {
    next.classList.add("hide");
  }
})

prev.addEventListener("click", function () {
 index-- ;
 next.classList.remove("hide")
 if (index == 0 ) {
   prev.classList.remove("show");
 }
 track.style.transform = "translateX(-" + index * carouselWidth + "px)";
})
// ()=> {
//     track.style.transform = "translateX(-$(carouselWidth)px)"
// })
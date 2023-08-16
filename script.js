const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide++;
  if (currentSlide > slides.length - 1) currentSlide = 0;
  slides[currentSlide].className = "slide active";
}

function previousSlide() {
  slides[currentSlide].className = "slide";
  currentSlide == 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  slides[currentSlide].className = "slide active";
}

const next = document.querySelector("#next");
const previous = document.querySelector("#previous");
next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);

const slides = document.querySelectorAll(".slide");
const boxes = document.querySelectorAll(".box");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  clearInterval(slideInterval);
  slides[currentSlide].className = "slide";
  changeOldCircleColor();
  currentSlide == slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  slides[currentSlide].className = "slide active";
  changeNewCircleColor();
  slideInterval = setInterval(nextSlide, 2000);
}

function previousSlide() {
  clearInterval(slideInterval);
  slides[currentSlide].className = "slide";
  changeOldCircleColor();
  currentSlide == 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  slides[currentSlide].className = "slide active";
  changeNewCircleColor();
  slideInterval = setInterval(nextSlide, 2000);
}

function addButtonFunc() {
  const next = document.querySelector("#next");
  const previous = document.querySelector("#previous");
  next.addEventListener("click", nextSlide);
  previous.addEventListener("click", previousSlide);

  const boxes = document.querySelectorAll(".box");
  for (const each of boxes) {
    each.addEventListener("click", (e) => {
      clearInterval(slideInterval);
      slides[currentSlide].className = "slide";
      changeOldCircleColor();
      currentSlide = e.currentTarget.id;
      changeNewCircleColor();
      slides[currentSlide].className = "slide active";
      slideInterval = setInterval(nextSlide, 2000);
    });
  }
}

function changeOldCircleColor() {
  const filled = boxes[currentSlide].querySelector(`.fill`);
  filled.setAttribute("display", "none");
  const unfilled = boxes[currentSlide].querySelector(`.unfill`);
  unfilled.setAttribute("display", "block");
}

function changeNewCircleColor() {
  const filled = boxes[currentSlide].querySelector(`.fill`);
  filled.setAttribute("display", "block");
  const unfilled = boxes[currentSlide].querySelector(`.unfill`);
  unfilled.setAttribute("display", "none");
}

addButtonFunc();

let slideIndex = 0;
let autoSlideInterval;

showSlides(slideIndex);
startAutoplay();

// Next/previous controls
function plusSlides(n) {
  clearInterval(autoSlideInterval);  // Stop autoplay when manually navigating
  showSlides(slideIndex += n);
  startAutoplay();  // Restart autoplay after manual interaction
}

// Manual navigation via dots
function currentSlide(n) {
  clearInterval(autoSlideInterval);  // Stop autoplay when manually navigating
  showSlides(slideIndex = n);
  startAutoplay();  // Restart autoplay
}

// Show the slides
function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Autoplay functionality
function startAutoplay() {
  autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, 15000);  // Change slide every 5 seconds
}

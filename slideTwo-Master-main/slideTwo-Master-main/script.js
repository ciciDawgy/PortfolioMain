/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("pics");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "";
  setTimeout(showSlides, 17000); // Change image every 2 seconds
}

var slidesIndex = 0;
showsSlides();

function showsSlides() {
  var j;
  var slidesOne = document.getElementsByClassName("picys");
  for (j = 0; j < slidesOne.length; j++) {
    slidesOne[j].style.display = "none";
  }
  slidesIndex++;
  if (slidesIndex > slidesOne.length) {slidesIndex = 1}
  slidesOne[slidesIndex-1].style.display = "";
  setTimeout(showsSlides, 17000); // Change image every 2 seconds
}*/

//Slideshow
/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  for (i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sliderImages.length) {slideIndex = 1}
  sliderImages[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 17000); // Change image every 2 seconds
}*/

    
  //https://developers.google.com/youtube/iframe_api_reference

  //https://www.youtube.com/watch?v=0VVJSvlUgtg&t=2s

  //Slideshow
  //https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/ 


// Clear all images
/*function reset() {
  for (let i = 0; i < slidersImages.length; i++) {
    slidersImages[i].style.display = "none";
  }
}*/

/*kind of working code */
/*
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("pics");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "";
  setTimeout(showSlides, 12000); // Change image every 2 seconds
}

showSlides();


function showSlidesTwo() {
  var k;
  var slidies = document.getElementsByClassName("picys");
  for (k = 0; k < slidies.length; k++) {
    slidies[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slidies.length) {slideIndex = 1}
  slidies[slideIndex-1].style.display = "";
  setTimeout(showSlidesTwo, 6000); // Change image every 2 seconds
}

showSlidesTwo();
*/

/*
var slideIndex = 0;
var i;
var slides = document.getElementsByClassName("pics");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "flex";
}
slideIndex++;*/ 
const pictureOne = document.querySelector('.pictureOne');
const pictureTwo = document.querySelector('.pictureTwo');
const pictureThree = document.querySelector('.pictureThree');
const pictureFour = document.querySelector('.pictureFour');

/*var i = 0;
var images = [];
var time = 3000;

images[0] = 'pictureOne';
images[1] = 'pictureTwo';
images[2] = 'pictureThree';
images[3] = 'pictureFour';

function changeImg() {
  document.slide.src = images[i];

  if(i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;


/*const slider = document.querySelector('.slider');
const sliderImgs = document.querySelectorAll('.slider img');
const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');



const container = document.querySelector('.container');

const body = document.body;
const slides = document.querySelectorAll('.slide')

let activeSlide = 0

next.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setActiveSlide()
})

prev.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setActiveSlide()
})

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}*/

/*const pics = document.querySelectorAll('.pics');*/

/*for (let i = 0; i < pics.length; i++) {
  pics.style.opacity = '1';
}*/

/*pics.forEach((pic) => {
  pic.style.opacity = '1';
})*/

let sliderImages = document.querySelectorAll(".mySlides");

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  for (i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sliderImages.length) {slideIndex = 1}
  sliderImages[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 28000); // Change image every 2 seconds
}



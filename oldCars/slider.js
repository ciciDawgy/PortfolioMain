const slider = document.querySelector('.slider');
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
}

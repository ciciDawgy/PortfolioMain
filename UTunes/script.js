const sliderImgs = document.querySelectorAll('.products img');
const products = document.querySelectorAll('.products');
const active = document.querySelector('.active');
const sections = document.querySelectorAll('section');
const showDiv = document.querySelector('.showDiv');
const animation =  document.querySelector('.animation');


/* Intersection Observer for sections */ 

window.addEventListener('scroll', checkSections)

checkSections()

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
       
        if(sectionTop < triggerBottom) {
            section.classList.add('show')
        } else {
            section.classList.remove('show')
        }
    })
}


const categories = document.querySelector('.categories');


const slider = document.querySelector('.slider');
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

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

toggleMobileMenu();

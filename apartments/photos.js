const sliderImgs = document.querySelectorAll('.slider img');
const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');
const navOne = document.querySelector('.hiddenMenu')


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

function menuToggle(){
  navOne.classList.toggle('active');
}

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.add('navOne')
})





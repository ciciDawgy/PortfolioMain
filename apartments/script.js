const logo = document.querySelector('.logo')
const container = document.querySelector('.container')
const nav = document.querySelector('.hiddenMenu')
const sections = document.querySelectorAll('section')
const pics = document.querySelector('.pics')
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');



function menuToggle(){
  nav.classList.toggle('active');
}

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


/*automatic slider for homepage*/

var i = 0;
var images = [];
var time = 6000;

images[0] = "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80";
images[1] = "https://plus.unsplash.com/premium_photo-1684175656154-ac52b3cc2c60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
images[2] =  "https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
images[3] =  "https://images.unsplash.com/photo-1433849665221-d2f93042ae54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
images[4] = "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
images[5] = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";


function changeImage() {
    document.slide.src = images[i]

    if(i < images.length - 1) {
        i++
    } else {
        i = 0
    } 
    setTimeout("changeImage()", time)
}

window.onload = changeImage;

/*
let currentIndex = 0;
const slides = document.querySelectorAll('.pics');
setInterval(() => {
  slides.forEach((slide, i) => {
    slide.style.display = i === currentIndex ? 'flex' : 'none';
  });
  currentIndex = (currentIndex + 1) % slides.length;
}, 5000);
*/

/*
  const slides = document.querySelectorAll('.pics .pic');
  let current = 0;

  function showNextSlide() {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === current) ? '1' : '0';
    });
    current = (current + 1) % slides.length;
  }

  // Initial state
  slides.forEach(slide => slide.style.transition = 'opacity 1s ease-in-out');
  showNextSlide();
  setInterval(showNextSlide, 4000); 
*/


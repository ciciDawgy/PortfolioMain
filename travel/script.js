const teamImgs = document.querySelectorAll('.teamOne');
const models = document.querySelectorAll('.modal');
const modalContainer = document.querySelector('.modal-container');
const close = document.querySelector('.fa-times');
const opens = document.querySelectorAll('.open');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const wrappers = document.querySelectorAll('.wrapper');

opens.forEach((open) => {
    open.addEventListener('click', () => {
        modalContainer.classList.add('show');
    })
});

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});


window.addEventListener('scroll', checkWrappers)

checkWrappers()

function checkWrappers() {
    const triggerBottom = window.innerHeight / 5 * 1.5;

    wrappers.forEach(wrapper => {
        const wrapperTop = wrapper.getBoundingClientRect().top;
       
        if(wrapperTop < triggerBottom) {
            wrapper.classList.add('show')
        } else {
            wrapper.classList.remove('show')
        }
    })
}


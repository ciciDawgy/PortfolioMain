const gridContainer = document.querySelector('.grid-container');
const gridItems= document.querySelectorAll('.grid-item');
const active = document.querySelector('.active');
const modal = document.querySelector('.modal');
const modalBackDrop = document.querySelector('.modalBackDrop');
const modalContent = document.querySelector('.modalContent');
const modalContentP = document.querySelector('.modalContent p');
const removeModal = document.querySelector('.fa-x');
const nextBtn = document.querySelector('.fa-arrow-right');
const show = document.querySelector('.show');
const gridItemHead = document.querySelectorAll('.grid-item.head');
const para = document.querySelectorAll('.para');
const modalp = document.querySelector('.modal p');
const close = document.querySelector('.close');
const turn = document.querySelector('.turn');
const scoreDisplay = document.getElementById('score');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const score3 = document.getElementById('score3');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');


let currentPlayer = 1;

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        modalBackDrop.classList.add('active')
            const question = gridItem.getAttribute('data-question');
            const options = gridItem.getAttribute('data-options').split('|'); 
            const answer = gridItem.getAttribute('data-answer');
            const value = parseInt(gridItem.getAttribute('data-value'));

                questionEl.textContent = question;
                optionsEl.innerHTML = '';

                options.forEach(option => {
                    const list = document.createElement('li');
                    list.textContent = option; 
                    list.style.input
                    list.onclick = () => {
                        if (option === answer) {
                            if (currentPlayer === 1) {
                                score1.textContent = parseInt(score1.textContent) + value;
                            } else if (currentPlayer === 2) {
                                score2.textContent = parseInt(score2.textContent) + value;
                            } else if (currentPlayer === 3) {
                                score3.textContent = parseInt(score3.textContent) + value;
                            }
                        }

                        currentPlayer = currentPlayer % 3 + 1;
                        gridItem.style.pointerEvents = 'none';
                        gridItem.style.color = '#0000ff';
                        gridItem.style.border = 'none';
                        gridItem.style.textShadow = "none";
                        closeModal();
                    };
                    optionsEl.appendChild(list);
                });

                openModal();
            });
        });


        function closeModal() {
            modalBackDrop.classList.remove('active');
        }

/*
removeModal.addEventListener('click', () => {
    modalBackDrop.classList.remove('active')
}) */


/* NEED TO PREVENT DOUBLE CLICKING
removeModal.addEventListener('dblclick', function(event) {
    event.preventDefault()
  }); 


removeModal.addEventListener('dblclick', removeModalOnClick); */

nextBtn.addEventListener('click', () => {
   modalContent.classList.toggle('flip') 
}) 

turn.addEventListener('click', () => {
    modalContent.classList.remove('flip')
}) 

close.addEventListener('click', () => {
    modalBackDrop.classList.remove('active')
}) 


let score = 0


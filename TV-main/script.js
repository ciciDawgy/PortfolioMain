const home = document.querySelector('.fa-home');
const vid = document.querySelector('.vid');
const tvGuide = document.querySelector('.tvGuide');
const showVideo = document.querySelector('.showVideo');
const selectBox = document.querySelector('.selectBox');
const upBtn = document.querySelector('.fa-chevron-up');
const rightBtn = document.querySelector('.fa-chevron-right');
const downBtn = document.querySelector('.fa-chevron-down');
const leftBtn = document.querySelector('.fa-chevron-left');
const move = document.querySelector('.move');
const tds = document.querySelectorAll('td');
const ok = document.querySelector('.ok');
const moveRight = document.querySelector('.supp');
const li = document.querySelector('.li');
const show = document.querySelector('.show');
const tvGuideOne = document.querySelector('.tvGuideOne');
const linky = document.querySelectorAll('a');
/*const vidOne = document.querySelector('.channel a');*/

/*https://www.youtube.com/watch?v=NiG2TnZiFL0
https://www.fwait.com/how-to-move-an-object-with-arrow-keys-in-javascript/*/
/*https://www.youtube.com/watch?v=srv5p791Am8*/

/*
moving select box
https://1bestcsharp.blogspot.com/2017/07/javascript-move-row-up-and-down.html
https://stackoverflow.com/questions/31133832/inserting-a-select-box-in-table-cell-in-html-via-javascript
https://www.youtube.com/watch?v=srv5p791Am8
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
*/
/*let load = 0;*/

/*
const btns = document.querySelector('a');
 btns.addEventListener('click', (ev) => {
    let url = "https://www.youtube.com/watch?v=spo_t1zKd6A";
    window.open(url, 'page');
})*/


/*tds.forEach(td => {
  td.addEventListener('click', () => {
    td.classList.add('show');
  })
})*/

//Remote 
const power = document.querySelector('.fa-power-off');

power.addEventListener('click', togglePower);
power.addEventListener('click', () => {
  if (selectBox.style.display === 'none') {
    selectBox.style.display = 'block';
  } else {
    selectBox.style.display = 'none';
  }
})

/*toggle power button */
function togglePower() {
  if (tvGuide.style.display === 'none') {
    tvGuide.style.display = 'block';
  } else {
    tvGuide.style.display = 'none';
  }
}

/*options - 
-take away display none from TV Guide and find another way of hiding that at first
-figure out how to move the video over
-add another class to vid when home button is clicked - doesn't seem to work
*/
/*home.addEventListener('click', () => {
  vid.classList.add('tvGuide', 'showVideo', 'moveRight');
})*/

/*
function showFrame() {
  if()
}
*/
/*vidOne.addEventListener('click', () => {
  vid.classList.add('show');
})*/
/*function togglePower() {
  if (tvGuide.style.display === 'none') {
    tvGuide.style.display = 'block';
  } else {
    tvGuide.style.display = 'none';
  }
}
*/
/*function toggleGuide() {
  if (tvGuide.style.display === 'none') {
    tvGuide.style.display = 'block';
  } else {
    tvGuide.style.display = 'none';
  }
}

 home.addEventListener('click', toggleGuide);*/

/*function toggleTV() {
  if (tvGuide.style.zIndex === "30") {
    tvGuide.style.zIndex = "900";
  } else {
    tvGuide.style.zIndex = "30";
  }
}*/ /*I can't get this to work */

/*home.addEventListener('click', toggleTV);*/

home.addEventListener('click', () => {
  vid.classList.add('tvGuide');
}) /* this does work */


/*linky.addEventListener('click', () => {
  vid.classList.remove('tvGuide');
}) /*trying to get video to show without pointer events */

linky.forEach((link) => {
  link.addEventListener('click', () => {
    removeyClass()
    vid.classList.add('show')
  })
})

function removeyClass() {
  vid.classList.remove('tvGuide');
}
/*moves selectbox*/

var pos = 0;

function animateFrame(){
  pos = pos + 50;   
  selectBox.style.left = pos + 'px';
}

rightBtn.addEventListener('click', animateFrame);

function animateFrameLeft(){
  pos = pos - 50;   
  selectBox.style.left = pos + 'px';    
}

leftBtn.addEventListener('click', animateFrameLeft);

function animateFrameDown(){
  pos = pos + 50;   
  selectBox.style.top = pos + 'px';  
}

downBtn.addEventListener('click', animateFrameDown);

function animateFrameUp(){
  pos = pos - 50;   
  selectBox.style.top = pos + 'px';
  } 

upBtn.addEventListener('click', animateFrameUp);
/*moves selectBox */


let moveBy = 98.5;
window.addEventListener('load', () => {
    selectBox.style.position = 'absolute';
    selectBox.style.left = 0;
    selectBox.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            selectBox.style.left = parseInt(selectBox.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            selectBox.style.left = parseInt(selectBox.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            selectBox.style.top = parseInt(selectBox.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            selectBox.style.top = parseInt(selectBox.style.top) + moveBy + 'px';
            break;
    }
});
var index;  // variable to set the selected row index
function getSelectedRow()
{
    var table = document.getElementById("table");
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            // clear the selected from the previous selected row
            // the first time index is undefined
            if(typeof index !== "undefined"){
                table.rows[index].classList.toggle("selected");
            }
           
            index = this.rowIndex;
            this.classList.toggle("selected");

        };
    }
        
}


getSelectedRow();


function upNdown(direction)
{
    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;
     if(direction === "up")
     {
         if(index > 1){
            parent.insertBefore(rows[index],rows[index - 1]);
            // when the row go up the index will be equal to index - 1
            index--;
        }
     }
     
     if(direction === "down")
     {
         if(index < rows.length -1){
            parent.insertBefore(rows[index + 1],rows[index]);
            // when the row go down the index will be equal to index + 1
            index++;
        }
     }
}
/*vidOne.addEventListener('click', () => {
  tvGuide.style.display = 'block';
})*/

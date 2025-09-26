const home = document.querySelector('.fa-home');
const vid = document.querySelector('.vid');
const tvGuide = document.querySelector('.tvGuide');
const showVideo = document.querySelector('.showVideo');
const selected = document.querySelector('.selected');
const upBtn = document.querySelector('.fa-chevron-up');
const rightBtn = document.querySelector('.fa-chevron-right');
const downBtn = document.querySelector('.fa-chevron-down');
const leftBtn = document.querySelector('.fa-chevron-left');
const play = document.querySelector('.fas fa-play');
const move = document.querySelector('.move');
const tds = document.querySelectorAll('td');
const ok = document.querySelector('.ok');
const moveRight = document.querySelector('.supp');
const li = document.querySelector('.li');
const show = document.querySelector('.show');
const showVidNow = document.querySelector('.showVidNow');
const tvGuideOne = document.querySelector('.tvGuideOne');
const linky = document.querySelectorAll('a');
const lala = document.querySelector('lala');
const controlPlay = document.querySelector('.controls .fa-play');
const controlShow = document.querySelector('.controls .showMe');





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
/*ok.addEventListener('click', () => {
  selectBox.firstChild.style.background = 'blue';
});*/

/*ok.addEventListener('click', () => {
  selectBox.e.target.href.window.open("_blank");
})*/

/*function openVid() {
  selectBox.e.target.href.window.open("_blank");
}
const btns = document.querySelector('a');
 btns.addEventListener('click', (ev) => {
    let url = "https://www.youtube.com/watch?v=spo_t1zKd6A";
    window.open(url, 'page');
})*/

/*const btns = document.querySelector('a');
 btns.addEventListener('click', (ev) => {
    let url = "https://www.youtube.com/watch?v=spo_t1zKd6A";
    window.open(url, 'page');
})
linky.forEach((link) => {
  link.addEventListener('click', () => {
    removeyClass()
    vid.classList.add('show', 'showVidNow');
  })
})*/

/*const currentLink = document.querySelector('e.target.href');
ok.addEventListener('click', () => {
  linky.getAttribute("href");
})*/




/*ok.addEventListener('click', () => {
  window.open('https://www.google.com/', 'page');
})*/

/*ok.addEventListener('click', () => {
  linky.getattribute;
})*/


/*function myFunction() {
  window.open("https://www.w3schools.com");
}*/


/*tds.forEach(td => {
  td.addEventListener('click', () => {
    td.classList.add('show');
  })
})*/

//Remote 
const power = document.querySelector('.fa-power-off');

power.addEventListener('click', togglePower);
power.addEventListener('click', () => {
  if (selected.style.display === 'none') {
    selected.style.display = 'block';
  } else {
    selected.style.display = 'none';
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

/*function turnOff() {
  if (vid.style.display === 'block') {
    power.addEventListener('click', () => {
      tv.classList.add('lala');
    })
}
turnOff();*/

/*function turnOff() {
  if (vid.classList.add('show') {
    power.addEventListener('click', () => {
      tv.classList.add('lala');
    })
  })
}
turnOff();*/

home.addEventListener('click', () => {
  vid.classList.add('tvGuide');
}) 


/*<a href="somepage.aspx" onclick="openlink(this)" target="_blank">Hello</a>*/

function openlink(anchor){
    var calc_i = 1;
    var page = anchor.getAttribute('href');
    anchor.setAttribute('href',page + '?id=' + calc_i);
}

/*selectBox.linky.forEach((link) => {
  link.addEventListener('click', () => {
    removeyClass()
    vid.classList.add('show', 'showVidNow');
  })
})*/

linky.forEach((link) => {
  link.addEventListener('click', () => {
    removeyClass()
    vid.classList.add('show', 'showVidNow');
  })
})

function removeyClass() {
  vid.classList.remove('tvGuide');
}

/*moves selectbox*/

var pos = 0;

function animateFrame(){
  pos = pos + 98.5;   
 selected.style.left = pos + 'px';
}

rightBtn.addEventListener('click', animateFrame);

function animateFrameLeft(){
  pos = pos - 98.5;   
  selected.style.left = pos + 'px';    
}

leftBtn.addEventListener('click', animateFrameLeft);

function animateFrameDown(){
  pos = pos + 98.5; 
  selected.style.top = pos + 'px';  
}

downBtn.addEventListener('click', animateFrameDown);

function animateFrameUp(){
  pos = pos - 98.5;   
  selected.style.top = pos + 'px';
  } 

upBtn.addEventListener('click', animateFrameUp);
/*moves selectBox */


let moveBy = 98.5;
window.addEventListener('load', () => {
    selected.style.position = 'absolute';
    selected.style.left = 0;
    selected.style.top = 0;
    selected.style.bottom = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            selected.style.left = parseInt(selected.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            selected.style.left = parseInt(selected.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            selected.style.top = parseInt(selected.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            selected.style.top = parseInt(selected.style.top) + moveBy + 'px';
            break;
    }
});

/*window.addEventListener('click', (e) => {
  switch (e.click) {
      case 'leftBtn':
          selectBox.style.left = parseInt(selectBox.style.left) - moveBy + 'px';
          break;
      case 'rightBtn':
          selectBox.style.left = parseInt(selectBox.style.left) + moveBy + 'px';
          break;
      case 'upBtn':
          selectBox.style.top = parseInt(selectBox.style.top) - moveBy + 'px';
          break;
      case 'downBtn':
          selectBox.style.top = parseInt(selectBox.style.top) + moveBy + 'px';
          break;
  }
});*/



/*linky.forEach((link) => {
  link.addEventListener('click', () => {
    removeyClass()
    vid.classList.add('show', 'showVidNow');
  })
})
function removeyClass() {
  vid.classList.remove('tvGuide');
}*/

/*function showVidy() {
  ok.addEventListener('click', () => {
    selectBox.vid.classList.add('show', 'showVidNow');
  })
}
showVidy();*/

/*let moveBy = 98.5;
window.addEventListener('load', () => {
    selectBox.style.position = 'absolute';
    selectBox.style.left = 0;
    selectBox.style.top = 0;
});
window.addEventListener('click', (e) => {
    switch (e.rightBtn) {
        case 'leftBtn':
            selectBox.style.left = parseInt(selectBox.style.left) - moveBy + 'px';
            break;
        case 'rightBtn':
            selectBox.style.left = parseInt(selectBox.style.left) + moveBy + 'px';
            break;
        case 'upBtn':
            selectBox.style.top = parseInt(selectBox.style.top) - moveBy + 'px';
            break;
        case 'downBtn':
            selectBox.style.top = parseInt(selectBox.style.top) + moveBy + 'px';
            break;
    }
});*/
/*var index;  // variable to set the selected row index
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
        
}*/


getSelectedRow();

    
    var index; 
    function getSelectedRow()
    {
        var table = document.getElementById("table");
        for(var i = 1; i < table.tds.length; i++)
        {
            table.tds[i].onclick = function()
            {
                // clear the selected from the previous selected row
                // the first time index is undefined
                if(typeof index !== "undefined"){
                    table.tds[index].classList.toggle("selected");
                }
               
                index = this.cellIndex;
                this.classList.toggle("selected");

            };
        }
            
    }


    getSelectedRow();
    
    
    function upNdown(direction)
    {
      var rows = document.getElementById("table").rows;
      const tds = document.querySelectorAll('td');
            parent = tds[index].parentNode;
         if(direction === "up")
         {
             if(index > 1){
                parent.insertBefore(tds[index],tds[index - 1]);
                // when the row go up the index will be equal to index - 1
                index--;
            }
         }
         
         if(direction === "down")
         {
             if(index < tds.length -1){
                parent.insertBefore(tds[index + 1],tds[index]);
                // when the row go down the index will be equal to index + 1
                index++;
            }
         }
    }


/*function upNdown(direction)
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
}*/

/*openVid();*/

/*play.addEventListener('click', () => {
  linky;
})*/
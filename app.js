// select container
const container = document.getElementById('container');
// create grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.textContent = "";
    container.appendChild(cell).className = 'grid';
  };
};


//select grid
const grid = document.querySelector('div');
//mouseover grid
grid.addEventListener("mouseover", function (event) {
  event.target.classList.replace("grid", "color");
});



//button grid
const number = document.getElementById('number');
const button = document.getElementById('button');

button.addEventListener("click", function () {

  let userInput = number.value;
  makeRows(userInput, userInput);

}, false);




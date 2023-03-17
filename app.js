// select container
const container = document.getElementById('container');
const button = document.getElementById('button');

// create grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement('div');
    cell.textContent = i + 1;
    container.appendChild(cell).className = 'grid';
  };
};






const grid = document.querySelector('div')
grid.addEventListener("mouseover", function (event) {
  event.target.classList.replace("grid", "color");
});


let userInput = prompt('number: ');

makeRows(userInput, userInput);

button.addEventListener('click', () => askGrid());




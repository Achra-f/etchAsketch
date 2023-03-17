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

function askGrid(){
  let n = prompt("How many squares?: ")
  return n
}

let x = askGrid();


makeRows(x, x);
button.addEventListener('click', () => askGrid());




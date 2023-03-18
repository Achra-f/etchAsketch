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


//select slider
const slider = document.getElementById('slider');

slider.addEventListener('mouseup', function () {
  grid.innerHTML = "";
  document.getElementById('value').innerHTML = slider.value + " x " + slider.value;
  let input = slider.value;
  makeRows(input, input)
});

//default grid
makeRows(12, 12)





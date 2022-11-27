// Create reference to container div
const container = document.querySelector(".container");
let numberOfRows = 16;
let numberOfColumns = 16;
const sketchPadSize = 960;



// Populate container div with 16 x 16 grid of square divs
for (let rowindex = 0; rowindex < numberOfRows; rowindex++) {
    const row = document.createElement('div');
    row.classList.add(`row`);
    for (let colindex = 0; colindex < numberOfColumns; colindex++) {
        const column = document.createElement('div');
        column.classList.add(`column`)
        row.appendChild(column);
    }
    container.appendChild(row);
}


// Add event listener to each div in the grid to look for hover and change style to filled
gridDiv = document.querySelectorAll('.column');
gridDiv.forEach(element => {
    element.addEventListener("mouseover",(e)=>{
        e.target.classList.add("filled");
    })
});


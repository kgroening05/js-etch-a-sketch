// Create reference to container div
const container = document.querySelector(".container");
let numberOfColumns = 16;
generateGrid();

// Change resolution based on user input
const resolutionBtn = document.getElementById('change-resolution');
resolutionBtn.addEventListener('click', e => {
    numberOfColumns = prompt("Enter number of pixels per row.", 16)
    if (numberOfColumns == null || numberOfColumns == "") {
        numberOfColumns = 16;
    }
    removeAllChildNodes(container);
    generateGrid();
})

// Populate container div with 16 x 16 grid of square divs
function generateGrid() {
    for (let rowindex = 0; rowindex < numberOfColumns; rowindex++) {
        const row = document.createElement('div');
        row.classList.add(`row`);
        for (let colindex = 0; colindex < numberOfColumns; colindex++) {
            const column = document.createElement('div');
            column.classList.add(`column`)
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    addFillEvent();
}


// Add event listener to each div in the grid to look for hover and change style to filled
function addFillEvent() {
    gridDiv = document.querySelectorAll('.column');
    gridDiv.forEach(element => {
        element.addEventListener("mouseover", (e) => {
            e.target.classList.add("filled");
        });
    });
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// Create reference to container div
const container = document.querySelector(".container");
// Populate container div with 16 x 16 grid of square divs
    // Create new div
const numberOfRows = 16;
const numberOfColumns = 16;
for (let rowindex = 0; rowindex < numberOfRows; rowindex++) {
    const row = document.createElement('div');
    row.classList.add(`row`);
    console.log('row div created')
    for (let colindex = 0; colindex < numberOfColumns; colindex++) {
        const column = document.createElement('div');
        column.classList.add(`column`)
        row.appendChild(column);
        console.log('column div created')
    }
    container.appendChild(row);
}

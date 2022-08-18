let side = 16;
let grid = side * side;
let container = document.getElementById("gridContainer");
let button = document.getElementById("reset");
let ink = "rgb(53, 51, 151)"


// create a function to erase the previous grid by deleting all items in the container div.
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// create a function to set up a new grid inside the container div, using the side variable as the grid dimensions.
function setup(input) {
    container.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${side}, 1fr)`;

    // logic for each square in the grid, to change color when the mouse hovers over them.
    for (i = 0; i < input; i++) {
        let item = document.createElement("div");
        container.appendChild(item);

        item.addEventListener("mouseover", (event) => {
            item.style.backgroundColor = ink;
            item.style.borderColor = ink
        });
    }
}

// call the setup function for the new page.
setup(grid);

// create logic for the reset button, and include an option to change the amount of squares on a side.
button.addEventListener("click", (event) => {
    side = parseInt(prompt("how many squares to a side?", "16"));

    if (side > 0 && side <= 100) {
        removeAllChildNodes(container);
        grid = side * side;
        setup(grid);

    } else {
        alert("Please choose a number between 1 and 100.")
    }

});


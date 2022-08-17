let side = 16;
let grid = side * side;
let container = document.getElementById("gridContainer");
let button = document.getElementById("reset");


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function setup(input) {
    container.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${side}, 1fr)`;

    for (i = 0; i < input; i++) {
        let item = document.createElement("div");
        container.appendChild(item);

        item.addEventListener("mouseover", (event) => {
            item.style.backgroundColor = "rgb(65, 84, 158)";
        });
    }
}

setup(grid);


button.addEventListener("click", (event) => {
    side = parseInt(prompt("how many squares to a side?"));

    if (side > 0 && side <= 100) {
        removeAllChildNodes(container);
        grid = side * side;
        setup(grid);

    } else {
        alert("Please choose a number between 1 and 100.")
    }

});


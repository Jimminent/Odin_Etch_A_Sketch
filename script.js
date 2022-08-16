let side = 16;
let grid = side * side;
let newSide;
let container = document.getElementById("gridContainer");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function setup(input) {
    for (i = 0; i < input; i++) {
        let item = document.createElement("div");
        container.appendChild(item);
        item.addEventListener("mouseover", (event) => {
            item.style.backgroundColor = "black";
        });
    }
}

setup(grid);

let button = document.getElementById("reset");
button.addEventListener("click", (event) => {
    newSide = prompt("how many squares to a side?");
    removeAllChildNodes(container);
    grid = newSide * newSide;
    setup(grid);

});


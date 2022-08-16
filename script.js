let grid = 16 * 16;

for (i = 0; i < grid; i++) {
    let item = document.createElement("div");
    let element = document.getElementById("gridContainer");
    element.appendChild(item);
    item.addEventListener("mouseover", (event) => {
        item.style.backgroundColor = "black";
    });
}


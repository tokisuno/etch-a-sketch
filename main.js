// [ ] create a webpage with a 16x16 grid of square divs
// [ ] create the divs with js
// [ ] put the grid squares inside of a container
// [ ] use flexbox to make the divs appear as a grid
//      - be careful with borders and margins

const canvas = document.querySelector(".canvas");

function drawGrid(size = 16) {
    unloadOldGrid();

    const container = document.createElement("div");
    container.setAttribute("class", "container");
    canvas.appendChild(container);

    for (let i = 0; i < size; i++) {                    // height
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        container.appendChild(column);

        for (let j = 0; j < size; j++) {                // width
            const square = document.createElement("div");
            let s_width = square.style.width = 640 / size;
            let s_height = square.style.height = 640 / size;
            square.setAttribute("class", "square");
            square.setAttribute("style", `width: ${s_width}px; height: ${s_height}px;`);
            column.appendChild(square);
        }
    }

    document.querySelectorAll("div.square").forEach((square) => {
        let count = 0;
        square.addEventListener("mouseover", () => {
            
            square.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${1-(count/10)}`
            square.style.opacity = `${100-(count*10)}`
            count++;
        });
    }); 
}

function redrawGrid() {
    drawGrid(getSize());
}

function unloadOldGrid() {
    if (document.querySelectorAll(".column").length > 0) {
        const canvas = document.querySelector(".canvas");
        while (canvas.firstChild) {
            canvas.firstChild.remove();
        }
    }
}

function getSize() {
    while (true) {
        let choice = prompt("Please enter size");
        if (Number(choice)) {
            if (Number(choice) > 100) {
                continue;
            } else if (Number(choice) < 0) {
                continue;
            } else {
                return choice;
            }
        } else {
            continue;
        }
    }
}

document.onload = drawGrid();

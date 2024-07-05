"use strict"

const changeSizeButton = document.querySelector('.sizeButton')
const gridContainer = document.querySelector('.gridContainer')

changeSizeButton.addEventListener('click', () => {
    let gridSize = prompt('Enter a grid size 1-100!')
    createGrid(gridSize)
})  

const createGrid = (size = 16) => {
    if(gridContainer.firstChild) {
        gridContainer.firstChild.remove()
    }

    const rowContainer = document.createElement("div");
    rowContainer.classList.add("rowContainer");
    gridContainer.appendChild(rowContainer)
    for(let i = 1; i <= size; i++) {
        const row = document.createElement("div");
        row.classList.add("gridRow");
        for(let i = 1; i <= size; i++) {
            const square = document.createElement("div");
            square.classList.add("gridSquare");
            row.appendChild(square);
        }    
        rowContainer.appendChild(row);
    }
}

gridContainer.addEventListener('mouseover', (event) => {
    const target = event.target
    
    if(target.className === 'gridSquare') {
        target.style.background = 'white'
    } else {
        return
    }
})

createGrid()

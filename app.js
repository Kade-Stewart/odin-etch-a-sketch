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
            square.style.background = 'rgb(38 ,38 , 38)'
            row.appendChild(square);
        }    
        rowContainer.appendChild(row);
    }
}

gridContainer.addEventListener('mouseover', (event) => {
    const target = event.target

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const a = (0.2)
    const rgba = `rgba(${r},${g},${b},${a})`;
    
    if(target.className === 'gridSquare') {
       if(target.style.background === 'rgb(38, 38, 38)') {
        target.style.background = rgba
       } else {
        let currentColor = target.style.background.match(/\d+/g)
        let alpha = Number(currentColor[4])
        if (alpha < 9) {
            const r = currentColor[0]
            const g = currentColor[1]
            const b = currentColor[2]
            const a = `${currentColor[3]}.${alpha + 1}` 
            const rgba = `rgba(${r},${g},${b},${a})`;

            target.style.background = rgba
        }
       }
    } else {
        return
    }
})

createGrid()

const cross = document.querySelector('.sketchpad');
const clearButton = document.querySelector('#clear');
const resizeButton = document.querySelector('#resize');

clearButton.addEventListener('click', function() {
    clearGrid();
});

resizeButton.addEventListener('click', function(){
    let size = prompt('Enter new Size of the Grid');
    if(size === null) return;
    if(size < 1 || size > 100 || isNaN(size)){
        alert('Enter a number between 1 and 100');
        return;
    }
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        cross.removeChild(row);
    })

    createGrid(size);
});

function createGrid(size) {
    for(let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; j++){
            let col = document.createElement('div');
            col.classList.add('col');
            col.addEventListener('mouseover', function() {
                if(col.style.backgroundColor != 'white'){
                    col.style.opacity = parseFloat(col.style.opacity) + 0.1;
                } else {
                    col.style.backgroundColor = randomColor();
                    col.style.opacity = 0.1;
                }
            });
            row.appendChild(col);
        }
        cross.appendChild(row);
    }
}

function clearGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        const cols = row.querySelectorAll('.col');
        cols.forEach(col => {
            col.style.backgroundColor = 'white';
            col.style.opacity = 1;
        });
    });
}

function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

createGrid(16);
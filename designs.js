listenToForm();

function listenToForm(){
    document.getElementById('sizePicker').addEventListener('submit', function(e){
        e.preventDefault();
        makeGrid();
    })
}

function removeFormListener() {
    document.getElementById('sizePicker').removeEventListener('submit', function(e){
        e.preventDefault();
        makeGrid();
    })
    listenToForm();
}

function makeGrid() {
    removeFormListener();
    event.preventDefault();
    //retrieve user input grid sizes and table
    const gridHeight = document.getElementById('input_height').value;
    const gridWidth = document.getElementById('input_width').value;
    const grid = document.getElementById('pixel_canvas');

    // clear existing grid
    grid.innerHTML = '';

    // create rows and row cells
    for (let i = 0; i < gridHeight; i++) {
        grid.insertRow(i).id = i;
        for (let j = 0; j < gridWidth; j++) {
            document.getElementsByTagName('tr')[i].insertCell().id = j;
        }
    }

    //launch listeners after tabla creation
    listenMousedown();


    //retrieve cells
    const cellToPaint = grid.getElementsByTagName('td');

    function listenMousedown() {
        //listen for mouse button pressed, and released
        grid.addEventListener("mousedown", paintCell);
        grid.addEventListener("mouseup", removeListener);
    }

    function removeListener() {
        //remove currently applied events
        grid.removeEventListener("mousedown", paintCell);
        for (let i = 0; i < cellToPaint.length; i++) {
            cellToPaint[i].onmousemove = null;
        }
        //re-apply listeners for next draw
        listenMousedown();
    }

    function paintCell() {
        // retrieve selected color
        let color = document.getElementById('colorPicker').value;
        //color!
        for (let i = 0; i < cellToPaint.length; i++) {
            cellToPaint[i].onmousedown = function () {
                this.style.backgroundColor = color;
            }
            cellToPaint[i].onmousemove = function () {
                this.style.backgroundColor = color;
            }
        }
    }
}



// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    event.preventDefault();
// Your code goes here!
    var gridHeight = document.getElementById('input_height').value;
    var gridWidth = document.getElementById('input_width').value;
    var grid = document.getElementById('pixel_canvas');

    // clear existing grid
    grid.innerHTML = '';

    // loops to create rows
    for (var i = 0; i < gridHeight; i++) {
        grid.insertRow(i).id = i;
        for (var j = 0; j < gridWidth; j++) {
            document.getElementsByTagName('tr')[i].insertCell().id = j;
        }
    }
}

//clear existing grid

function clearGrid() {
    var deletionParent = document.getElementById('pixel_canvas');
    deletionParent
}
// Select color input

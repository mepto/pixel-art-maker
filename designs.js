function makeGrid() {
    event.preventDefault();
    //retrieve user input grid sizes and table
    var gridHeight = document.getElementById('input_height').value;
    var gridWidth = document.getElementById('input_width').value;
    var grid = document.getElementById('pixel_canvas');

    // clear existing grid
    grid.innerHTML = '';

    // loops to create rows and row cells
    for (var i = 0; i < gridHeight; i++) {
        grid.insertRow(i).id = i;
        for (var j = 0; j < gridWidth; j++) {
            document.getElementsByTagName('tr')[i].insertCell().id = j;
        }
    }
    listenMousedown();
}

function listenMousedown() {
    //retrieve table
    var grid = document.getElementById('pixel_canvas');
    var cellToPaint = grid.getElementsByTagName('td');

    grid.addEventListener("mousedown", paintCell);
    grid.addEventListener("mouseup", removeListener);

}

function removeListener() {
    //retrieve table
    var grid = document.getElementById('pixel_canvas');
    var cellToPaint = grid.getElementsByTagName('td');

    grid.removeEventListener("mousedown", paintCell);
        for (var i = 0; i < cellToPaint.length; i++) {
        cellToPaint[i].onmousemove = null;
    }
    listenMousedown();
}

function paintCell() {
    //retrieve table
    var grid = document.getElementById('pixel_canvas');
    var cellToPaint = grid.getElementsByTagName('td');

    // retrieve selected color
    var color = document.getElementById('colorPicker').value;

    for (var i = 0; i < cellToPaint.length; i++) {
        cellToPaint[i].onmousemove = function () {
            this.style.backgroundColor = color;
        }
    }
}





//
//
//
//window.onload = function () {
//    var ParentTable = document.getElementById("mytable");
//    ParentTable.style.backgroundColor = "yellow";
//    childTD = ParentTable.getElementsByTagName("td");
//    for (var i = 0; i < childTD.length; i++) {
//        childTD[i].onmouseover = function () {
//            togglepointer(this);
//        }
//        childTD[i].onmouseout = function () {
//            togglepointer(this);
//        }
//    }
//}
//
//function togglepointer(element) {
//    element.style.cursor == "pointer" ? element.style.cursor = "default" : element.style.cursor = "pointer";
//    element.style.backgroundColor == "red" ? element.style.backgroundColor = "yellow" : element.style.backgroundColor = "red";
//}

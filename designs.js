function makeGrid() {
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
    //activate disabled button for transformation into image
    document.getElementById('makeImage').disabled = false;

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

// elements to make canvas
function makeCanvas() {
    //remove table borders for crisp image
    document.getElementById('pixel_canvas').classList.remove('borders');
    //launch html2canvas script
    html2canvas(document.getElementById("pixel_canvas"), {
        allowTaint: true,
        onrendered: function (canvas) {
            var dataURL = canvas.toDataURL();
            var image = new Image();
            image.src = dataURL;
            //create new window and insert data to it
            let newWin = window.open('');
            newWin.document.write('<title>Save your image</title><style>img{border: 1px solid #444;}</style> <p style="background:#ddd;font-family: sans-serif; margin:15px 0; padding:10px;">Right-click on the image to save your pixel art!</p>' + image.outerHTML);

        }
    });
    //restore borders to table
    document.getElementById('pixel_canvas').classList.add('borders');


}

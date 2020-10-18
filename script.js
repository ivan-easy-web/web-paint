const canvas = document.querySelector('.canvas');
var currentColor = 'black';
function setCurrentColor(color) {
    currentColor = color;
}


for (let i = 0; i < 110; i++) {
    let row = document.createElement('div');
    row.className = 'row';

    for (let i = 0; i < 210; i++) {
        let pixel = document.createElement('div');
        let pixelBackground = document.createElement('div');
        pixel.className = 'pixel';
        pixelBackground.className = 'pixelBackground';
        pixelBackground.appendChild(pixel);
        pixelBackground.addEventListener('mousedown', function(event) {
            pixel.style.backgroundColor = currentColor;
            event.preventDefault();
        })
        pixelBackground.addEventListener('mouseenter', function(event) {
            if (buttonPressed(event)) {
                pixel.style.backgroundColor = currentColor;
                event.preventDefault();
            }
        })
        row.appendChild(pixelBackground);
    }

    canvas.appendChild(row);
}

function buttonPressed(event) {
    if (event.buttons == null)
      return event.which != 0;
    else
      return event.buttons != 0;
}

for(let button of document.getElementsByClassName('colorButton')){
    button.addEventListener('click', function() {
        setCurrentColor(button.getAttribute('colorValue'));
    })
}

document.querySelector('#colorPickerInput').addEventListener('change', function(event) {
    setCurrentColor(event.target.value);
})

document.querySelector('#colorPickerInput').addEventListener('input', function(event) {
    setCurrentColor(event.target.value);
})

document.querySelector('#clearButton').addEventListener('click', function(event) {
    for (let pixel of document.getElementsByClassName('pixel')) {
        pixel.style.backgroundColor = 'white';
    }
})
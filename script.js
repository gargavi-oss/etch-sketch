const container = document.getElementById('container');
let input;
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return `rgb(${r},${g},${b})`;
};
function getBlackColor() {
    return `rgb(${0},${0},${0})`;
};
function createBoxes(numberOfGrid) {
    container.innerHTML = '';
    let gridSize = 640 / numberOfGrid;
    for (let i = 0; i < numberOfGrid * numberOfGrid; i++) {

        const box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('style', 'border: 0.2px blue solid; margin: 0; padding: 0px; opacity: 0.1;');
        box.style.width = gridSize + 'px';
        box.style.height = gridSize + 'px';
        container.appendChild(box);
    }
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = getRandomRgb();
            let currentOpacity = parseFloat(box.style.opacity);
            if (currentOpacity < 1) {
                box.style.opacity = (currentOpacity + 0.1).toString();
            };
        });
    });
    const randomColor = document.querySelector('.random-color')
    randomColor.addEventListener('click', () => {
        boxes.forEach((box) => {
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = getRandomRgb();
                let currentOpacity = parseFloat(box.style.opacity);
                if (currentOpacity < 1) {
                    box.style.opacity = (currentOpacity + 0.1).toString();
                };
            });
        });
    });
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', () => {
        boxes.forEach((box) => {
            box.style.backgroundColor = '#fff';

        });
    });
    const blackColor = document.querySelector('.black-color');
    blackColor.addEventListener('click', () => {
        boxes.forEach((box) => {
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = '#000000';
            });
        });
    });
};
createBoxes(16);
const resizeButton = document.querySelector('.resize-button');
resizeButton.addEventListener('click', () => {
  let input = parseInt(prompt("Enter number of grids you want (0-100)?"));
    if (input > 0 && input <= 100) {
        createBoxes(input);
    } else {
        alert("Please Enter a Vaild Number Between 0-100");
    }
});
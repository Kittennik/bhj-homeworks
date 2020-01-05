const image = document.getElementById("cookie");
const click = document.getElementById("clicker-speed");
const imageWidth = image.width;
let time = new Date();

function changeSize() {
    let now = new Date()
    let difference = now - time;
    let speed = (1 / difference) * 1000;
    click.textContent = speed.toFixed(2);
    const output = document.getElementById("clicker__counter");
    output.textContent ++;
    if (image.width === imageWidth) { 
      image.width += 100;
    } 
    else {
      image.width -= 100;
    }
    return  time = new Date();
};

image.onclick = changeSize;
let colorBlock = document.getElementById("colorBlock")
colorBlock.style.height = "100px"
colorBlock.style.width = "300px"
colorBlock.style.backgroundColor = "rgb(0,0,0)"
colorBlock.style.marginLeft = "100px"
colorBlock.style.marginTop = "15px"

let r = 0
let g = 0
let b = 0

let currentColor = document.getElementById("currentColor")
currentColor.style.marginLeft = "150px"

let redColor = document.getElementById("redColor")
redColor.style.marginLeft = "150px"

let greenColor = document.getElementById("greenColor")
greenColor.style.marginLeft = "150px"

let blueColor = document.getElementById("blueColor")
blueColor.style.marginLeft = "150px"

let red1 = document.getElementById("red1")
red1.style.marginLeft = "15px"

let green1 = document.getElementById("green1")
green1.style.marginLeft = "1px"

let blue1 = document.getElementById("blue1")
blue1.style.marginLeft = "10px"

colorBlock.addEventListener("click", clicked1);
colorBlock.addEventListener("click", clicked2);
colorBlock.addEventListener("click", clicked3);

function clicked1(event) {
    let response = parseInt(event.target.getAttribute("data-1"),10)
    r += response
    colorBlock.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
    currentColor.innerHTML = "Current Color: rgb(" + r + "," + g + "," + b +")"
}

function clicked2(event) {
    let response = parseInt(event.target.getAttribute("data-2"),10)
    g += response
    colorBlock.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
    currentColor.innerHTML = "Current Color: rgb(" + r + "," + g + "," + b +")"
}

function clicked3(event) {
    let response = parseInt(event.target.getAttribute("data-3"),10)
    b += response
    colorBlock.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
    currentColor.innerHTML = "Current Color: rgb(" + r + "," + g + "," + b +")"
}
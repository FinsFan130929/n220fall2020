let element = document.getElementById("changeColor");
element.style.height = "200px";
element.style.width = "200px";
element.style.backgroundColor = "#999";
element.style.float = "left";
element.style.margin = "5px"
element.addEventListener("click", clicked);

let element2 = document.getElementById("changeColor2");
element2.style.height = "200px";
element2.style.width = "200px";
element2.style.backgroundColor = "#999";
element2.style.float = "left";
element2.style.margin = "5px"
element2.addEventListener("click", clicked);

let element3 = document.getElementById("changeColor3");
element3.style.height = "200px";
element3.style.width = "200px";
element3.style.backgroundColor = "#999";
element3.style.float = "left";
element3.style.margin = "5px"
element3.addEventListener("click", clicked);

function clicked(event) {

    let response = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = response;
}

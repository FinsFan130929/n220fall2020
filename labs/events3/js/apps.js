let flash1 = document.getElementById("flash1")
flash1.style.margin = "15px"
flash1.addEventListener("click",clicked)


let flash2 = document.getElementById("flash2")
flash2.style.margin = "15px"
flash2.addEventListener("click",clicked)


let flash3 = document.getElementById("flash3")
flash3.style.margin = "15px"
flash3.addEventListener("click",clicked)


function clicked(event) {
    let response = event.target.getAttribute("data-answer")
    event.target.innerHTML = response
}
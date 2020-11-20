let dvGrid = document.getElementById("grid")

firstRand = Math.random() * 255;
secRand = Math.random() * 255;
thirdRand = Math.random() * 255;

randColor = Math.random() * 255;

console.log(randColor);

dvGrid.style.width = "20px"
dvGrid.style.height = "20px"
dvGrid.style.float = "left"
dvGrid.style.backgroundColor = (Math.random() * 255, Math.random() * 255, Math.random() * 255);
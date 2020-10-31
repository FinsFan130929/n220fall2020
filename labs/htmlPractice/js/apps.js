let txtDieSize = document.getElementById("txtDieSize");
let divResult = document.getElementById("divResult")


function rollDie() {
    let dieSize = Number(txtDieSize.value);
    let randRoll = 1 + Math.floor(Math.random() * dieSize);
    divResult.innerHTML = randRoll
};
let txtGuess = document.getElementById("txtGuess");
let divResult = document.getElementById("divResult")

let randRoll = 1 + Math.floor(Math.random() * 20);
function guess() {
    

    if (Number(txtGuess).value = randRoll) {
        divResult.innerHTML = "Correct"
    } 
    if (txtGuess.value > randRoll) {
        divResult.innerHTML = "Over"
    }
    if (txtGuess.value < randRoll) {
        divResult.innerHTML = "Under"
    }

    txtGuess.value = "";
};
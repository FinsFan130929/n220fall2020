var txtTags = document.getElementById("txtTags")
var dvOutput = document.getElementById("dvOutput")
var allTags = []

function breakString() {
    var newTag = txtTags.value

    allTags.push(newTag)

    dvOutput.innerHTML = ""

    for(var i = 0;i < allTags.length; i++) {

        var newEl = document.createElement("div")
        newEl.innerHTML = allTags[i]
            if(allTags[i] == "FinsFan") {
                newEl.style.color = "#3cb5ab"
            }
        dvOutput.appendChild(newEl)

    }


}

/*
var figures = [
    { name: "Elf", price: 13},
    { name: "Dwarf", price: 10},
    { name: "Gnome", price: 8},
    { name: "Giant", price: 17},
]

for(var i = 0; i < figures.length; i++) {
    var curFigures = figures[i];
   var newEl = document.createElement("div");
   newEl.innerHTML = curFigures.name + ": $" + curFigures.price
    document.body.appendChild(newEl)
} */

/*
var guesses = [15, 8, 7, 12, 3 ];

var sum = 0;

for(var i = 0; i < guesses.length; i++) {
    var curGuess = guesses[i];
    sum = sum + curGuess;
} */


/*
var guesses = [15, 8, 7, 12, 3 ];

var foundFlag = false;

for(var i = 0; i < guesses.length; i++) {
    var curGuess = guesses[i];
    if(curGuess == 8) {
        foundFlag = true;
        break;
    }
} */


/*
var txtTags = document.getElementById("txtTags")
var txtOutput = document.getElementById("txtOutput")

function breakString() {
    var inputString = txtTags.value
    var splitString = inputString.split(" ")

    txtOutput.innerHTML = splitString[1];
} */


var txtSentence = document.getElementById("txtSentence")
var txtOutput = document.getElementById("txtOutput")

function compute() {
    var inputString = txtSentence.value
    var splitString = inputString.split(",")

    for(var i = 0; i < splitString.length; i++) {
       
    }

    txtOutput.innerHTML = splitString;

    document.getElementById("txtSentence").value = ""
}
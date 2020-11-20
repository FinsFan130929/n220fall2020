
function badWordCatch() {
    var txt = document.getElementById("txt").value;
    txt = txt.toLowerCase();
  
    var array = txt.split(" ");

    var badWords = ["clear", "water", "tires"];
    
    var foundBadWords = array.filter(element => badWords.includes(element));
    
    document.getElementById("tally").innerHTML = foundBadWords.length;

    document.getElementById("txt").value = ""
    
}

function price() {
    let txtPrice = Number(document.getElementById('txtPrice').value);
    let tip = txtPrice * .15;
    let total = txtPrice + tip;
    console.log("Tip: $" + Number(tip) + " Total: $" +  Number(total))
}
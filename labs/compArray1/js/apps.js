let objects = [

    { color: "#FF0000", height: "100px", width: "300px" },
   
    { color: "#FFFF00", height: "200px", width: "200px" },
   
    { color: "#ff0000", height: "300px", width: "100px" },
   
   ];

for(var i = 0; i < objects.length; i++) {
    var curObject = objects[i];
    var newEl = document.createElement("div"); 
    newEl.style.backgroundColor = curObject.color
    newEl.style.width = curObject.width
    newEl.style.height = curObject.height
    document.body.appendChild(newEl)
} 
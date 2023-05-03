var text = ""; 
var i; 
for (i = 1; i < 100; i=i+2) { 
    text += "" + i + "<br>"; 
} 
document.getElementById("demo").innerHTML = text; 
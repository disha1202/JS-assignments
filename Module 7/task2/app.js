document.querySelectorAll("td").forEach(x => x.addEventListener("click",function(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    e.style.backgroundColor = bgColor;
}));

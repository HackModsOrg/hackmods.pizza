let title = "Hackmods.pizza";

function funnywrite(destination,text,speed) {
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += text.charAt(i);
        i++;
    }, speed);
    document.getElementById(destination).innerHTML = "\u200c";
}

window.addEventListener('load', function () {      
    funnywrite("title",title,100);
})

let title = "Hackmods.pizza";

function funnywrite(destination,text,speed) {
    var i = 0;
    var interval = setInterval(function(){
        if (i > text.length){
            clearInterval(interval);
            document.getElementById(destination).innerHTML = "";
        }
        document.getElementById(destination).innerHTML += text.charAt(i);
        i++;
        if (i > text.length){
            clearInterval(interval);
            document.getElementById(destination).innerHTML = "";
        }
    }, speed);
}

setInterval(funnywrite,3000,"title",title,100);

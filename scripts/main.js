let title = "Hackmods.pizza";

function funnywrite(destination,text,speed) {
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += text.charAt(i);
        i++;
        if (i > text.length){
            clearInterval(interval);
        }
    }, speed);
}

window.setInterval(funnywrite("title",title,100),1000);

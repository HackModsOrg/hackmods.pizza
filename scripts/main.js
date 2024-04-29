let title = "hackmods.pizza";

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

funnywrite("text",title,100);

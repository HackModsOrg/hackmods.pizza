let title = "Hackmods.pizza";
let paragraph = "pizza";

function funnywrite(destination,text,speed) {
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += text.charAt(i);
        i++;
        if (i > text.length){
            clearInterval(interval);
        }
    }, speed);
    document.getElementById(destination).innerHTML = "\u200c";
}

window.addEventListener('load', function () {      
    funnywrite("title",title,100);
    funnywrite("p1",paragraph,50);
    if (!document.hidden) {
        var textint = setInterval(funnywrite,3000,"title",title,100);
    }
    else
    {
        clearInterval(textint);
        document.getElementById("title").innerHTML = "\u200c";
    }
})

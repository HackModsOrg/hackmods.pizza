let title = "ackmods.pizza";
let paragraph = "pizza";

function funnywrite(destination,text,speed) {
    document.getElementById(destination).innerHTML = "H";
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += text.charAt(i);
        i++;
        if (i > text.length){
            clearInterval(interval);
        }
    }, speed);
}

function hellwrite(destination,text,speed) {
    document.getElementById(destination).innerHTML = "";
    var i = 0;
    while(1):
        var interval = setInterval(function(){
            document.getElementById(destination).innerHTML += text.charAt(i);
            i++;
            if (i > text.length){
                clearInterval(interval);
            }
        }, speed);
}

window.addEventListener('load', function () {
    funnywrite("title",title,100);
    funnywrite("p1",paragraph,50);
    setInterval(funnywrite,3000,"title",title,100);
})

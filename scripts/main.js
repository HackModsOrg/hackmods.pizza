let title = "Hackmods.pizza";
let text = "Hi, hello, hi, hello, hi, hello, hi, hello, hi";

function funnywrite(destination,text,speed) {
    document.getElementById(destination).innerHTML = "";
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += text.charAt(i);
        i++;
        if (i > text.length){
            clearInterval(interval);
        }
    }, speed);
}

setInterval(funnywrite,3000,"title",title,100);
funnywrite("text",text,100);

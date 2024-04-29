let title = "Hackmods.pizza";
let paragraph = "Hi, hello, hi, hello, hi, hello, hi, hello, hi";

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

funnywrite("text",paragraph,100);
setInterval(funnywrite,3000,"title",title,100);

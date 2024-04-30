let title = "Hackmods.pizza";
let paragraph = "pizzapizzapizzapizzapizzapizzapizzapizzapizzapizzapizzapizzapizzapizzapizza";

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

window.addEventListener('load', function () {
    funnywrite("title",title,100);
    funnywrite("p1",paragraph,100);
    funnywrite("p2",paragraph,100);
    funnywrite("p3",paragraph,100);
    setInterval(funnywrite,3000,"title",title,100);
})

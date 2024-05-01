let title = "Hackmods.pizza";
let paragraph = "pizza";

function funnywrite(destination,text,speed) {
    var interval = setInterval(function(){
        var destinationElement = document.getElementById(destination)
        destinationElement.innerHTML += text.charAt(destinationElement.innerHTML.length);
        if (destinationElement.innerHTML.length >= text.length){
            clearInterval(interval);
        }
    }, speed);
    //document.getElementById(destination).innerHTML = "\u200c";
}

window.addEventListener('load', function () { 
    funnywrite("title",title,100);
    funnywrite("p1",paragraph,50);
})

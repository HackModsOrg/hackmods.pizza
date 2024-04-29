let title = "hackmods.pizza";
let i = 0;

function funnywrite(text,interval) {
  while(i<text.length) {
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += text.charAt(i);
        i++;
        if (i > text.length){
            clearInterval(interval);
        }
    }, speed);
}

funnywrite(title,100);

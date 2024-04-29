let title = "hackmods.pizza";
let i = 0;

function funnywrite(text) {
  while(i<text.length) {
  setTimeout(document.write(text.charAt(i)), 500);
  i++;
  } 
}

funnywrite(title);

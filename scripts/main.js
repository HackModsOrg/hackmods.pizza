let title = "hackmods.pizza";
let i = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function funnywrite(text) {
  while(i<text.length) {
  setTimeout(document.write(text.charAt(i)));
  i++;
  } 
}

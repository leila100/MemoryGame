const time = document.querySelector(".time");
const button = document.querySelector(".addTime");
const moves = document.querySelector(".moves");
const reset = document.querySelector(".reset");

// increment time
let t = 0;
let x = setInterval(function() {
  time.innerHTML = t++;
}, 1000);

let m = 0;
button.addEventListener("click", function(event) {
  moves.innerHTML = m++;
});

reset.addEventListener("click", function(event) {
  t = 0;
  m = 0;
  moves.innerHTML = 0;
});

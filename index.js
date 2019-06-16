let score = 0;
let scoreDisplay = document.getElementById("score");
const holesObj = document.getElementsByClassName('hole');
const holesParent = document.getElementById("whack-a-mole");


//puts a mole image in a random hole since it's empty it will toggle
//IMPORTANT:  When you load the page, it starts with 0 moles
// holesObj[randomHole].classList.toggle("mole");


//this is a timed interval function
setInterval(function () {
  const randomHole = Math.floor(Math.random() * holesObj.length)

  holesObj[randomHole].classList.toggle("mole");
}, 300);


//clickEvent.target is necessary, so that it knows which hole we're referring to, and it's the one we clicked on.
holesParent.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    score++;
    scoreDisplay.innerText = score;
    clickEvent.target.classList.remove("mole");
  }
})


document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
});
var character = document.getElementById("character");
function moveLeft() {
  let left = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
    );
    left -= 100;
    if (left >= 0) {
      character.style.left = left + "px";
    }
  }
  function moveRight() {
    let left = parseInt(
      window.getComputedStyle(character).getPropertyValue("left")
  );
  left += 100;
  if (left < 300) {
    character.style.left = left + "px";
  }
}
var block = document.getElementById("block");
var counter = 0;
let lives = 1;
let lastlife = 0;
block.addEventListener("animationiteration", () => {
  const bgimgs = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF-SWycStYV8WZbNKoHQSqvGcZje7m2dE9Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6aj1qmjGI5xObi6aDjfK53-74z3g_Pe5Goot8iHlMw7HuAsmp_0XOtwTaAGUTsInP1o&usqp=CAU",
  ];
  block.style.backgroundImage =
    "url('" + bgimgs[Math.floor(Math.random() * 3)] + "')";
  console.log(block.style.backgroundImage);
  var random = Math.floor(Math.random() * 3);
  left = random * 100;
  block.style.left = left + "px";
  counter++;
});
setInterval(function () {
  var characterLeft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  var blockTop = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );
  if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
    alert("Game over. Score: " + counter);
    block.style.animation = "none";
  }
}, 1);

document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);

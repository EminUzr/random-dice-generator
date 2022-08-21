let randomNumber1 = 6;
let randomNumber2 = 6;

document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);
document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".btn").classList.add("pressed");
  setTimeout(() => {
    document.querySelector(".btn").classList.remove("pressed");
  }, 100);
  randomNumber1 = Math.ceil(Math.random() * 6);
  randomNumber2 = Math.ceil(Math.random() * 6);
  console.log(randomNumber1);
  document
    .querySelector(".img1")
    .setAttribute("src", `images/dice${randomNumber1}.png`);
  document
    .querySelector(".img2")
    .setAttribute("src", `images/dice${randomNumber2}.png`);
});

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").textContent = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector(".container h1").textContent = "Draw!";
}

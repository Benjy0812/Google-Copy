document.getElementById("lucky").addEventListener("click", function () {
  window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
});

const themeToggle = document.getElementById("theme-toggle");
const themeImg = document.getElementById("themeImg");
const body = document.body;

const sunIcon = "sun.png";
const moonIcon = "moon.png";

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeImg.src = body.classList.contains("dark-mode") ? moonIcon : sunIcon;
});

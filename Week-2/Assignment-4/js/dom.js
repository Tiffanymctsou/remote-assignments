//1. click to change text
const TextChange = document.querySelector("#greeting");

TextChange.addEventListener('click', () => {
  TextChange.textContent = "Have a good time!";
})

//2. click to show more
const button = document.querySelector(".button");
const moreContent = document.querySelector(".hide");

button.addEventListener('click', () => {
  if(moreContent.style.display === "none") {
     moreContent.style.display = "block";
  } else {
     moreContent.style.display = "none";
  }
})
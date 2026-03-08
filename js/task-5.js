let button = document.querySelector('.change-color');
let currentColor = document.querySelector('.color');
let body = document.querySelector('body');
button.addEventListener('click', event => {
  currentColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
  console.log(getRandomHexColor());
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let nameOutput = document.querySelector('#name-output');
let inputName = document.querySelector('#name-input');

inputName.addEventListener('input', event => {
  if (inputName.value === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = event.currentTarget.value.trim();
  }
});

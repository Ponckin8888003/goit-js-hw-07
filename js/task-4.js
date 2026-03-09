let form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  let email = form.elements.email.value;
  let password = form.elements.password.value;
  if (email === '' || password.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    let dataObject = {
      email: email.trim(),
      password: password.trim(),
    };

    console.log(dataObject);
    form.reset();
  }
});

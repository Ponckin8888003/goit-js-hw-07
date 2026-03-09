let form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  let email = form.elements.email.value.trim();
  let password = form.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    let dataObject = {
      email: email,
      password: password,
    };

    console.log(dataObject);
    form.reset();
  }
});

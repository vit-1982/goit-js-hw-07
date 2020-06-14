const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', event => {
  const inputToCheck = event.target.value.length;
  if (inputToCheck === Number(inputRef.getAttribute('data-length'))) {
    if (inputRef.classList.contains('invalid')) {
      inputRef.classList.remove('invalid');
    }
    inputRef.classList.add('valid');
  } else {
    if (inputRef.classList.contains('valid')) {
      inputRef.classList.remove('valid');
    }
    inputRef.classList.add('invalid');
  }
});

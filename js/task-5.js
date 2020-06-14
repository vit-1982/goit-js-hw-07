const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  if (event.target.value === '') {
    return (nameRef.textContent = 'незнакомец');
  }
  nameRef.textContent = event.target.value;
});

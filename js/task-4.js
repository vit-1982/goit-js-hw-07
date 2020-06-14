const box = document.querySelector('#counter');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const value = document.querySelector('#value');

incrBtn.addEventListener('click', onIncrBtnClick);
decrBtn.addEventListener('click', onDecrBtnClick);

function onIncrBtnClick(event) {
  counterValue += 1;
  value.textContent = counterValue;
}

function onDecrBtnClick(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}

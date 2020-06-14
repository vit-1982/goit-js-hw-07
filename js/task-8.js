const controlsRef = document.querySelector('#controls');
const listRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('button[data-action="render"]');
const clearBtnRef = document.querySelector('button[data-action="destroy"]');
const inputBtn = controlsRef.firstElementChild;

createBtnRef.addEventListener('click', createBoxes);
clearBtnRef.addEventListener('click', destroyBoxes);

function randColor() {
  var r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function createBoxes(amount) {
  amount = inputBtn.valueAsNumber;
  let width = 30;
  let height = 30;

  if (amount > 0) {
    for (let i = 0; i < amount; i += 1) {
      const elem = document.createElement('div');
      elem.classList.add('elem');
      elem.style.width = `${width}px`;
      elem.style.height = `${height}px`;
      elem.style.backgroundColor = randColor();
      width += 10;
      height += 10;
      listRef.appendChild(elem);
    }
  }
}

function destroyBoxes() {
  while (listRef.firstElementChild) {
    listRef.firstElementChild.remove();
  }
  inputBtn.value = '';
}

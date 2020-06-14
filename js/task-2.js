const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   listRef.appendChild(itemRef);
// });

const createIngredientItem = ingredient => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('ingredient_item');
  itemRef.textContent = ingredient;

  return itemRef;
};

const ingredientList = ingredients.map(ingredient =>
  createIngredientItem(ingredient),
);

listRef.append(...ingredientList);

const listRef = document.querySelector('#categories');
const categoriesRef = listRef.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(category => {
  const textRef = category.querySelector('h2');
  console.log(`Категория: ${textRef.textContent}`);
  const totalOfElementsRef = category.querySelectorAll('li');
  console.log(`Количество элементов: ${totalOfElementsRef.length}`);
});

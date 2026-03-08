let listItems = document.querySelectorAll('.item');

let valueLength = `Number of Categories: ${listItems.length}`;
console.log(valueLength);

listItems.forEach(listItem => {
  let listCategory = listItem.querySelector('h2');
  console.log(`Category: ${listCategory.textContent}`);

  let categoryValue = listItem.querySelectorAll('ul li');
  console.log(`Elements: ${categoryValue.length}`);
});

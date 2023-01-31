const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients"); // 

ingredients.forEach((item) => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.classList.add("item");
  ingredientsListItem.textContent = item;
  ingredientsList.append(ingredientsListItem);
});
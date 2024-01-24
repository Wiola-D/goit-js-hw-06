const numberOfCategories = document.querySelectorAll(".item");
const item = numberOfCategories.length;
console.log(`Number of Categories: ${item}`);

numberOfCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});

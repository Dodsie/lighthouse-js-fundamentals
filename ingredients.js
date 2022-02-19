const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;}

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
const reverse = ingredients.reverse();
for (i = 0; i < ingredients.length; i++) {
  console.log(reverse[i]);}

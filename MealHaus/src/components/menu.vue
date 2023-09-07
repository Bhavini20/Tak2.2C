<template>
  <div class=container>
    <h1><span class="underline">Meal</span> <span class="highlight">Planner</span></h1>
    <div  class="selection-container" v-show="counter < 7">
      <h3>Select your meal for <span class="highlight"> {{ daysOfWeek[counter] }}</span></h3>
      <div class=selection-options>
        <ul>
          <li v-for="items in mealsList.slice(0,3)" :key="items">
            <h3>{{ items.mealName }}</h3>
            <p>{{ items.mealDescription }}</p>
            <button @click="chooseItem(items)">Add</button>
            <!-- <p>{{items.mealDescription}}</p> -->
          </li>
        </ul>
      </div>
    </div>

    <div class="chosen-container" v-show="counter > 6">
      <h3><span class="underline">Selected</span> <span class="highlight">Meals:</span></h3>
      <ul>
        <li v-for="meals in chosenMealList" :key="meals">
          <h3>{{ meals.mealName }},</h3>
        </li>
      </ul>
      <h3><span class="highlight">Ingredients</span> <span class="underline">List:</span></h3>
      <div class="ingredients-output">
        <ul v-for="ingredients in chosenMealList" :key="ingredients">
          <li v-for="test in ingredients.mealIngredients" :key="test">
            {{ test }},
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

  const mealsList = ref([
    {
      mealName: 'Lemon Salmon Spaghetti',
      mealIngredients: ['Lemon', 'Spaghetti', 'Mascarpone', 'Spinach', 'Salmon'],
      mealDescription: 'It only takes five ingredients and five minutes prep to whip up this easy, creamy spaghetti. Watch as the mascarpone melts into a slurpalicious sauce – it’s pure midweek magic!'
  },
  {
      mealName: 'Mexican Pulled Pork Bowl',
      mealIngredients: ['Pork', 'Rice', 'Cherry Tomatos', 'Avocado', 'Spinach'],
      mealDescription: 'Pulled pork burrito bowls are packed with juicy pulled pork, avocado, cheese, tomatoes and so much more. Easy to prep ahead and assemble when you\'re ready to enjoy.'
  },  
  {
      mealName: 'Spinach and Ricota Gnocchi Bake',
      mealIngredients: ['Potato Gnocchi', 'Spinach', 'Tomato Jar Sauce', 'Ricotta', 'Shredded Cheese'],
      mealDescription: 'A quick and easy, hearty main course dish with three cheeses, a rich tomato sauce and pillowy soft potato dumplings.'
  },
  {
      mealName: 'Honey Marinade Steak',
      mealIngredients: ['Honey', 'Soy Sauce', 'Beef Steak', 'Steamed Veggies'],
      mealDescription: 'This Honey Garlic and Ginger Steak Marinade is a delicious and easy marinade recipe that will make your steaks flavourful and tender!'
  },
  {
      mealName: 'Meatball Subs',
      mealIngredients: ['Meatballs', 'Diced Tomatoes', 'Hot Dog Rolls', 'Baby Rocket', 'Tasty Cheddar'],
      mealDescription: 'In this classic Italian American sandwich, tender meatballs drenched in tomato sauce are tucked into crisp rolls then buried under a blanket of gooey cheese.'
  },
  {
      mealName: 'Asian Style Tofu Salad',
      mealIngredients: ['Tofu Pieces', 'Edamame', 'Asian Slaw Mix', 'Lime', 'Coriander'],
      mealDescription: 'Crunchy Vegan Asian Salad With Baked Tofu & Garlic Soy Maple Dressing.'
  },
  {
      mealName: 'Potato and Pea Frittata',
      mealIngredients: ['Baby White Potatoes', 'Peas', 'Eggs', 'Goat\'s Cheese', 'Leafy Salad Mix'],
      mealDescription: 'Layer potatoes, goat\'s cheese and peas in this easy 5-ingredient dinner.'
  },
  {
      mealName: 'Mexican Chicken Loaded Sweet Potatoes',
      mealIngredients: ['Sweet Potatoes', 'Chicken Mince', 'Mexican Sauce', 'Kidney Beans', 'Coriander'],
      mealDescription: 'Roast sweet potatoes and top with yummy Mexican mix!'
  },
  {
      mealName: 'Bacon and Egg Pesto Spaghetti',
      mealIngredients: ['Spaghetti', 'Eggs', 'Bacon', 'Basil Pesto', 'Shaved Parmesan'],
      mealDescription: 'For a quick and easy weeknight meal try this crispy bacon and pesto spaghetti topped with a soft poached egg and shaved parmesan.'
  },
  ])
  const chosenMealList = ref([])

  const daysOfWeek = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])

  let counter = 0

  let showResults = false

  function chooseItem(meal) {
    while (counter < 7) {
      removeFromList(meal)
      chosenMealList.value.push(meal)
      counter++
      console.log(counter)
      break
    }
  }
  function removeFromList(item) {
    mealsList.value = mealsList.value.filter((t) => t !== item)
  }
</script>

<style scoped>
  .container {
    font-size: 1.4vw;
    padding: 0px 60px 40px 60px;
  }
  h1 {
    text-align: center;
  }
  .highlight {
    color: #FB6100;
  }
  .underline {
    border-bottom: 5px solid #FB6100;
  }
  .selection-container {
    margin-top: 20px;
    text-align: center
  }
  ul {
    list-style: none;
  }
  .selection-options li {
    padding: 10px;
    margin-top: 10px;
    border-top: 2px solid #FB6100;
    border-bottom: 2px solid #FB6100;
  }
  .selection-container li:nth-child(odd){
    border-right: 2px solid #FB6100;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  .selection-container li:nth-child(even){
    border-left: 2px solid #FB6100; 
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: #FB6100;
  }
  .selection-container li:nth-child(even) h3{
    color: #fff;
  }
  .selection-container li:nth-child(even) button{
    border: 2px solid #fff;
    color: #fff;
  }
  .selection-container li:nth-child(even) button:hover{
    border: 2px solid #FB6100;
    color: #FB6100;
    background-color: #fff;
  }
  .selection-options li h3 {
    margin-top: 10px;
    color: #FB6100;
  }
  li button {
    margin-top: 5px;
    padding: 4px;
    border: 2px solid #FB6100;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: #FB6100;
    transition: 0.3s ease-in-out;
  }
  li button:hover {
    color: #FB6100;
    background-color: transparent;
  }
  .chosen-container ul {
    margin-top: 10px;
    margin-bottom: 10px;
    }
  .chosen-container li {
    display: inline-block;
    margin-left: 10px;
  }
  .chosen-container li:nth-child(even){
    color: #FB6100;
  }
</style>
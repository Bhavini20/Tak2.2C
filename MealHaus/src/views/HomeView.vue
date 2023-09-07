<template>
<div class=container>
  <div class="upper-body">
    <h1>Welcome to MealHaus!</h1>
    <h3>Weekly Meal Planning Made Easy</h3>
    <p>
          Take the hassle out of weekly meal planning by 
          selecting your week's meals, and generating your 
          custom shopping list. With plenty of meals to choose 
          from and more meals added weekly, we are sure you'll be 
          able to find a meal plan that you'll love!  
        </p>
  </div>
  
  <div class="card-container">
    <div class="card-item">
      <CardItem headerText="Easy To Use" 
      bodyText="Simple to use and navigate. Just click the 'Get Started!' button and follow the prompts!" 
      imageURL="https://thefamilycentre.org.au/wp-content/uploads/2020/08/placeholder.png" />
    </div>
    <div class="card-item">
      <CardItem headerText="Plenty Of Meals" 
      bodyText="With plenty of meals available for your selection, and more being added regularly, there's a little something for everyone." 
      imageURL="https://thefamilycentre.org.au/wp-content/uploads/2020/08/placeholder.png" />
    </div>
    <div class="card-item">
      <CardItem headerText="Completely Free" 
      bodyText="Completely free for your use, meaning more money in your pocket! Just something else you no longer need to worry about." 
      imageURL="https://thefamilycentre.org.au/wp-content/uploads/2020/08/placeholder.png" />
    </div>
  </div>

  <div class="button-container">
      <RouterLink class="link-item" to="/start"><button class="get-started-button"><span>Get Started!</span></button></RouterLink>
  </div>

  
  </div>
</template>

<script setup>
import CardItem from '../components/carditem.vue'
// import StepCard from '../components/stepCard.vue'

</script>

<style scoped>
  .container {
    font-size: 1.4vw;
  }
  .upper-body {
    background-color: #FB6100;
    padding: 20px 10px 20px 10%;
    border-radius: 0px 0px 25px 0px;
    margin-right: 10%;
    text-align: center;
  }
  .upper-body h3 {
    color: #fff;
  }
  .card-container {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
  }
  .button-container {
    margin-top: 100px;
    text-align: center;
  }
  .get-started-button {
    width: 20%;
    padding: 10px;
    color: #FB6100;
    background-color: transparent;
    border: 2px solid #FB6100;
    cursor: pointer;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    transition: 0.3s;
  }
  .get-started-button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.3s;
  }
  .get-started-button span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -10px;
    transition: 0.3s;
  }
  .get-started-button:hover span {
    padding-right: 15px;
  }
  .get-started-button:hover span:after {
    opacity: 1;
    right: 0;
  }
  .middle-container{
    margin-top: 20px;
    text-align: center;
  }
  .middle-container h3 {
    display: inline;
    padding: 10px;
    background-color: #FB6100;
    border-radius: 10px;
  }
  .first-card, .second-card, .third-card {
    background-color: #FB6100;
    padding: 10px;
    border-radius: 0px 0px 0px 20px;
  }
  .first-card {
    margin-left: 10%;
    margin-bottom: 1px;
  }
  .second-card {
    margin-left: 20%;
    margin-bottom: 1px;
  }
  .third-card {
    margin-left: 30%;
  }
  @media (max-width: 1024px) {
    /* Tablet View */
    .container {
      font-size: 16px;
    }
    .upper-body {
      padding: 10px 10px 10px 10px;
      border-radius: 10px;
      margin: 0px 10px 0px 10px;
    }
    .card-container {
      display: none;
    }
    .button-container {
      margin-top: 10px;
    }
    .get-started-button {
      width: 50%;
    }
    .first-card, .second-card, .third-card {
      background-color: #FB6100;
      padding: 10px;
      margin: 0px 10px 10px 10px;
      border-radius: 0px 0px 0px 0px;
    }
  }
</style>
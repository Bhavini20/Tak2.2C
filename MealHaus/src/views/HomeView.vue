<template>
<div class=container>
  <div class="upper-body">
    <h2 style="padding-top: 3rem;">Welcome to Food Frenzy!</h2>
    <h3 style="color: rgb(64, 166, 235); padding-top: 1.5rem;">Finding recommendatons has never been this easy!</h3>
  </div>
  
  <div class="button-container">
      <RouterLink class="link-item" to="/start"><button class="button-bottom"><span>Get Started!</span></button></RouterLink>
  </div>

</div>
</template>

<script setup>


</script>

<style scoped>
  .container {
    font-size: 1.4vw;
  }
  .upper-body {
    padding: 20px 10px 20px ;
    text-align: center;
  }
  .upper-body h3 {
    color: #fff;
  }

  .button-container {
    margin-top: 100px;
    text-align: center;
  }
  .button-bottom {
    width: 20%;
    padding: 10px;
    color: rgb(64, 166, 235);
    background-color: transparent;
    border: 2px solid rgb(64, 166, 235);
    cursor: pointer;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    transition: 0.3s;
  }
  .button-bottom span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.3s;
  }
  .button-bottom span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -10px;
    transition: 0.3s;
  }
  .button-bottom:hover span {
    padding-right: 15px;
  }
  .button-bottom:hover span:after {
    opacity: 1;
    right: 0;
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
    .button-container {
      margin-top: 10px;
    }
    .button-bottom {
      width: 50%;
    }

  }
</style>
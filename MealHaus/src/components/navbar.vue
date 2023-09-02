<template>
  <div class="container">
    <div class="logo-container">
      <!-- ToDo: Fix Stylings -->
      <RouterLink class="link-item" to="/"><span class="highlight">Meal</span><span class="underline">Haus</span></RouterLink>
    </div>
    <nav>
      <RouterLink class="link-item" to="/start">Get Started</RouterLink>
      <RouterLink class="link-item" to="/about">About</RouterLink>
      <RouterLink class="link-item" to="/meals">Meals</RouterLink>
      <RouterLink class="link-item" to="/faq">FAQ</RouterLink>
    </nav>
    <div class="extras-container">
      <button class="login-button">Log In</button>
      <button class="signup-button">Sign Up</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .container {
    font-size: 1.4vw;
    padding: 40px 60px 40px 60px;
    display: flex;
  }
  .logo-container, nav, .extras-container {
    flex: 1;
  }
  .logo-container {
    font-size: 3vw;
    font-weight: 800;
    cursor: pointer;
  }
  .highlight {
    color: #FB6100;
  }
  .underline {
    border-bottom: 5px solid #FB6100;
  }
  nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .link-item {
    text-decoration: none;
    color: black;
    position: relative;
    top: 0;
    transition: 0.3s ease-in-out;
  }
  .link-item:hover {
    top: -10px;
    color: #FB6100;
  }
  .extras-container {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1px;
  }
  .extras-container button {
    font-size: 1.4vw;
    padding: 5px;
    background-color: #FB6100;
    border: 2px solid #FB6100;
    color: #000;
    width: 100px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  .login-button {
    border-radius: 25px 0px 0px 0px;
  }
  .signup-button {
    border-radius: 0px 0px 25px 0px;
  }
  .extras-container button:hover {
    background-color: transparent;
    color: #FB6100;
  }
  @media (max-width: 1024px) {
    /* Tablet View */
  .container {
    font-size: 16px;
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  .logo-container {
    font-size: 24px;
  }
  nav {
    justify-content: center;
  }
  .extras-container {
    justify-content: center;
  }
  .extras-container button {
    width: 100%;
    font-size: 14px;
  }
}
</style>
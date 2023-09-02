<template>
  <div class="card">
    <div class="card-image">
      <img :src="imageURL" alt="placeholderImage">
      </div>
    <div class="card-header">
      <h3>{{ headerText }}</h3>
    </div>
    <div class="card-body">
      {{ bodyText }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  headerText: {
    type: String,
    required: true
  },
  bodyText: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
  .card {
    padding: 10px;
    width: 200px;
    height: 200px;
    text-align: center;
  }
  .card-image {
    height: 50%;
  }
  .card-image img {
    height: 100%;
    width: 100%;
    object-fit:cover;
  } 
</style>
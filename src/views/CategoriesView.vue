<template>
    <div class="body">
      <h1>Categories</h1>
      <div class="container">
        <CategorieComponent v-for="categorie in categories" :key="categorie.id" :categorie="categorie" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { fetchBooks } from '@/services/fetchData';
  import CategorieComponent from '../components/CategorieComponent';

  const categories = ref([]);

  onMounted(async () => {
    try {
      categories.value = await fetchBooks();
    } catch (err) {
      console.log(err);
    }
  })
</script>

<style scoped>
  .body {
   display: flex;
   flex-direction: column;
   text-align: center;
  }
  h1 {
    margin: 30px;
  }
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
    }
</style>
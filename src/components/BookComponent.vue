<template>
  <div class='image' @click="onClick()">
      <img :src='book.image_url' alt="random photo" />
  </div>
</template>
  
<script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const props = defineProps({
    book: {
      type: Object,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  })

  const onClick = () => {
    router.push('/books/' + props.id + '/' + props.book.id)
  }

// You can add methods or computed properties here, if needed

</script>
  
  
<style scoped>
  .image img {
    width: 300px;
    height: 500px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transition: box-shadow 0.3s ease-in-out;

  }
  
  img:hover {
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
  }
</style>
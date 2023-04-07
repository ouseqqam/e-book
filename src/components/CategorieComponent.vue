<template>
    <div class='image' @click="onClick()">
      <img :src=categorie.image  alt="Snow" >
    </div>
</template>

<script setup>
  import { onMounted, defineProps } from 'vue';
  import { useRouter } from 'vue-router'

  const props = defineProps({
    categorie: {
      type: Object,
      required: true,
    },
  })

  const router = useRouter()

  const onClick = () => {
    router.push('/books/' + props.categorie.id)
  }

  onMounted(() => {
    // console.log(props.categorie.id)
  })
</script>


<style scoped>
  .image img {
    width: 300px;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transition: box-shadow 0.3s ease-in-out;
  }
  img:hover {
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
  }
</style>
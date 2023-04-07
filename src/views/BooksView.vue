<template>
    <div class="body">
        <h1>Books</h1>
        <div class="container">
            <BookComponent v-for="book in books" :key="book.id" :book="book" :id='id' />
        </div>
    </div>
</template>
  
  
<script setup>
    import { ref, onMounted } from 'vue'
    import { fetchBook } from '@/services/fetchData'
    import BookComponent from '../components/BookComponent'
    import { useRoute } from 'vue-router'
    
    
    const route = useRoute()
    const id = ref('')
    const books = ref([]) 


    onMounted(async () => {
        try {
            id.value = route.params.id
            books.value = await fetchBook(id.value)
        }
        catch (err) {
            console.log(err);
        }
    })

</script>


<style scoped>
    h1 {
        margin: 20px;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        margin: 30px;
    }
</style>
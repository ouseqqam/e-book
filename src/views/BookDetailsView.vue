<template>
    <div>
        <div class="container" v-if="book">
            <div class="cover">
                <img :src="book.image_url" alt="">
            </div>
            <div>
                <h3>{{ book.title }}</h3>
                <p class="author">By {{ book.author }} </p>
                <hr />
                <p class="description">Description: {{ book.description }} </p>
                <p class="shipping">Free Shipping</p>
                <p class="price">Price: 500$</p>
                <button class="btn" @click="onClick()">Add To Cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { fetchBook } from '@/services/fetchData'
    import { useRoute } from 'vue-router'
    import { useStore } from 'vuex'

    const store = useStore()
     
    const route = useRoute()
    const catId = ref('')
    const bookId = ref('')
    const book = ref()


    onMounted(async () => {
        try {
            catId.value = route.params.id
            bookId.value = route.params.id2

            const res = await fetchBook(catId.value)
            book.value = res.filter(b => b.id == bookId.value)[0]
        }
        catch (err) {
            console.log(err);
        }
    })

    const onClick =  () => {
        console.log(store.state.count)
    }

</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        margin: 100px; 
    }

    .cover {
        margin-right: 50px;
    }

    .cover img {
        max-width: 300px;
        height: 350px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    h3 {
        font-size: 32px;
        margin-bottom: 10px;
    }

    .author {
        color: green;
        margin: 20px 0px;
    }

    .description {
        width: 800px;
        margin: 20px 0px ;
        font-size: 20px;
    }
    .shipping {
        font-weight: bold;
    }
    .price {
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
    }
    .btn {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: green;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #3e8e41;
    }
</style>
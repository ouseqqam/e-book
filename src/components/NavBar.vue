<template setup>
    <nav>
    <ul>
      <li><router-link to="/">E-BOOK</router-link></li>
      <li><router-link to="/">Categories</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
      <template v-if="isAuth">
          <li v-if="!user"><router-link to="/signin">Sign in</router-link></li>
          <li v-else @click="handleClick">Logout</li>
      </template>
    </ul>
  </nav>
</template>

<script>

    import store from '@/store/index'
    import { useRouter } from "vue-router";
    import { computed } from 'vue';


    const router = useRouter()
    export default {
        setup() {
            const handleClick = () => {
                store.dispatch('logout')
                router.push('/')
            }
            return {
                handleClick,
                user: computed(() => store.state.user),
                isAuth:  computed(() => store.state.isAuth)
            }
        }
    }
</script>

<style scoped>
    nav {
        background-color: #333;
        color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }

    nav ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    nav li {
        margin-right: 20px;
    }

    nav a {
        color: #fff;
        text-decoration: none;
    }

</style>
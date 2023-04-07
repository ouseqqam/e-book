<template>
    <div class="container">
      <form @submit.prevent="handleLogin">
        <div class="email">
          <label for="email">Email</label>
          <input type="text" v-model="user.email">
        </div>
        <div class="pass">
          <label for="password">Password</label>
          <input type="password" v-model="user.password">
        </div>
        <button type="submit">Sign in</button>
        <p class="signup-link">Don't have an account? <router-link to="/signup">Sign up</router-link></p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script setup>

  import { ref } from "vue";
  import { useRouter } from "vue-router"
  import { useStore } from "vuex"

  const router = useRouter()
  const store = useStore()
  
  const user = {
    name: "",
    email: "",
    password: "",
  };
  
  let errorMessage = ref('');
  
  const handleLogin = async () => {
    try {
            await store.dispatch('signin', user)
            router.push('/cart')
        } catch (err) {
            errorMessage.value = err.message.split(' ')[2]
        }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  .email,
  .pass {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 300px;
  }
  
  label {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  input {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }
  
  button {
    background-color: green;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
    width: 200px;
  }
  
  button:hover {
    background-color: rgb(2, 82, 2);
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }

  .signup-link {
  margin-top: 20px;
  text-align: center;
}

.signup-link a {
  color: green;
  font-weight: bold;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}

  </style>
  
<template>
  <NavBar />
  <router-view/>
</template>

<script setup>

// @ is an alias to /src
  import NavBar from './components/NavBar'
  // onMounted(() => {

  // })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}

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

nav a:hover {
  text-decoration: underline;
}

</style>

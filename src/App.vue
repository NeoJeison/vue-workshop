<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Bienvenidos al taller de Vue.js</h1>
    <router-view></router-view>
    <br>
    <router-link to="/Users">Go to users</router-link>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

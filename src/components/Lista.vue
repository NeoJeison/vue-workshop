<template>
  <div class="lista">
      La lista contiene actualmente {{ users.length }} usuarios
      <ul>
         <li v-bind:key="user.id" v-for="user in users">{{ user.name }}</li> 
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Lista',
  props: ['users']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

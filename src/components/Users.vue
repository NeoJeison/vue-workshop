<template>
  <div class="users">
    <h1>Componente usuarios</h1>
    <Lista :users="users"></Lista>
    <input type="text" id="nombre" v-model="nombre">
    <button v-on:click="agregarNuevo">Agregar nuevo</button>
  </div>
</template>

<script>
import Lista from './Lista'

export default {
  name: 'Users',
  data: function(){
  return {
    users: [],
    nombre: '',
    ids: 0,
  }},
  components: {
    Lista
  },
  methods: {
    agregarNuevo(){
      this.users.push({ id:this.ids, name:this.nombre });
      this.ids = this.ids+1;
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
 
 <div>
    <a href="#" target="_blank">
      <img src="../assets/images/logo.png" class="logo" alt="Escuela superior de Música" />
    </a>
  </div>

  <div class="card">
    <router-link to="/register/" class="button" >Registrarse aquí</router-link>

  </div>
  <router-view></router-view>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}


.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

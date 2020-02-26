<template>

  <div id="app">    
    <cabecera></cabecera>
    <router-view></router-view>
    <pie></pie>
  </div>
</template>

<script>
import cabecera from './components/cabecera'
import pie from './components/pie'

export default {
  name: 'App',
  components: {
    cabecera,
    pie, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

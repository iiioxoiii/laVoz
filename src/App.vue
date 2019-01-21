<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo_lavoz.png">
    <HelloWorld></HelloWorld>
    <ByComponent></ByComponent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ByComponent from './components/ByComponent.vue'


export default {
  name: 'app',

  //data
  components: {
    HelloWorld,
    ByComponent
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

<template>
  <div>
    <h1>La Voz with Vue.js</h1>
    <p>Racking de dels videos publicats al programa de la LaVoz</p>
    <ul v-for="item in items">
      <VideoComponent :missatge="item"></VideoComponent>
    </ul>
  </div>
</template>


<script>
import VideoComponent from './VideoComponent.vue'

  export default {
    name: 'HelloWorld',

    components: {
      VideoComponent
    },


    data: function() {
      return{

        items: ["BPvW6YibyN0",
              "jPElxC_9Kj0",
              "O1g5fPPLJD8",
              "LlwMhRxIy4E",
              "ghQ9imZscOI",
              "rnGbx6NX_Ts",
              "CArvbH-NRZA",
              "0oKaLLUVNYc",
              "wYebGOmj0zw",
              "L6zR__gGNeQ",
              "bbFuY8XBP5I",
              "lhkPnVkWJLY",
              "1zM7HwP0mIw",

            ]
          }
        }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

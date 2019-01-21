<template>
  <div>

    <h4>{{jsonResponse.items[0].snippet.publishedAt}}</h4>
    <h2>{{jsonResponse.items[0].snippet.title}}</h2>
    <h1>{{jsonResponse.items[0].statistics.viewCount}}</h1>
  </div>
</template>

<script>

export default {

  name: 'VideoComponent',

  props: ['missatge'],

  data: function() {


    return {

      jsonResponse:{},
      suburl: "https://www.googleapis.com/youtube/v3/videos?key=",
      apiKey: "AIzaSyDhj3H1Mt1_-Uz8tAPTit6Wm3KAaogm4hU",
      requeriments: "&fields=items(snippet(title,tags,channelTitle,publishedAt),statistics(viewCount))&part=snippet,statistics&id=",

      apiValues: {
        "items": [{
            "snippet": {
              "publishedAt": "",
              "title": "",
              "channelTitle": "",
              "tags": [""]
            },
            "statistics": {
              "viewCount": ""
            }
          }]
      }
    }



  },


  methods: {

    actualitza() {
      this.suburl = (this.suburl + this.apiKey + this.requeriments + this.missatge);
      this.getResults();

    },

    getResults: function(){
        axios
        const axios = require('axios');
        axios.get(this.suburl)
          .then(response => (this.jsonResponse = response.data))
          console.log(this.jsonResponse)
    }
  },

  created(){
    this.actualitza();
  },

  comptador (){
    this.$nextTick(() => {
      $('.count').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        },{
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    })
  }


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 10em;
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

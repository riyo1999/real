<template>
  <div class="hello">
    <p class="text-left"><b>Please use headphone</b> 🎧</p>
    <img class="send" src="../assets/send.gif" alt="Vue.js PWA">
    <h5>{{ msg }}</h5>
    <div v-if="btn">
      <iframe src="/static/mp3/celengan.mp3" style="display:none" allow="autoplay"/>
      <a class="btn btn-success text-light" :href="'/second'">Mulai</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Waiting message...',
      btn: false,
    }
  },

  methods: {
    flash: function(){
      var v = this;
      setTimeout(function() {
        v.msg = "Hello, Rizka";
        v.btn = true;
      },3000);
    }
  },

  mounted() {
    this.flash();
  },
}
</script>

<style>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

.text-left {
  padding-top: 10px;
  margin-left: 30px;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.hello {
  background-color: #D9DEFB;
  width: 100%;
  height: 100%;
  padding-bottom: 100%;
}
</style>

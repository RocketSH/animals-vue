<template>
  <div class="hello">
    <pre v-text="JSON.stringify(location)"></pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    location: {}
  }),
  async created() {
    this.location = await fetch(
      "https://api.rocketsto.re/api/geolocate"
    ).then(res => res.json());
  },
  name: "HelloWorld",
  props: {
    msg: String
  }
};
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

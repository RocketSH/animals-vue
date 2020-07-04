<template>
  <div class="hello">
    <pre v-text="JSON.stringify(animals, null, 2)"></pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    animals: {}
  }),
  async created() {
    const { data } = await axios.get("http://localhost:4000/api/animals");
    this.animals = data.data; // state
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

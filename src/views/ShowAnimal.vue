<template>
  <div class="hello container">
    <router-link to="/" class="">&lt;&lt; Go back</router-link>

    <h1 class="title">Animal Name: {{ animal.name }}</h1>
    <p><strong>Country of origin:</strong> {{ animal.country_of_origin }}</p>
    <p><strong>Length:</strong> {{ animal.length }} cm</p>
    <p><strong>Weight:</strong> {{ animal.weight }} kg</p>
  </div>
</template>

<script>
import AnimalClient from '../api/AnimalClient';

export default {
  data: () => ({
    animal: null,
  }),
  async created() {
    this.animal = await AnimalClient.getAnimal(this.$route.params.id);
  },
};
</script>

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

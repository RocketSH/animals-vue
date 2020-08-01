<template>
  <div class="hello container">
    <!-- <pre v-text="JSON.stringify(animals, null, 2)"></pre> -->
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Weight (kg)</th>
          <th>Length (cm)</th>
          <th>Origin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="animal in animals" v-bind:key="animal.id">
          <td v-text="animal.id"></td>
          <td v-text="animal.name"></td>
          <td v-text="animal.weight"></td>
          <td v-text="animal.length"></td>
          <td v-text="animal.country_of_origin"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AnimalClient from '../api/AnimalClient';

export default {
  data: () => ({
    animals: [],
  }),
  async created() {
    this.animals = await AnimalClient.listAllAnimals();
  },
  name: 'HelloWorld',
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

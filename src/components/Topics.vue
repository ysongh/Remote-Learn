<template>
  <div class="container">
    <h1>Topics</h1>
    <router-link class="btn btn-primary" to="/addtopic">Add Topic</router-link>
    <div v-bind:key="topic[3].value" v-for="topic in topics">
      <h2>{{ topic[6].value }}</h2>
      <p>{{ topic[7].value }}</p>
      <p>Likes {{ topic[8].value }} -- {{ topic[14].value }}</p>
      <p>{{ topic[1].value }}</p>
      <router-link class="btn btn-secondary" :to="{ path: '/topic/'+ topic[3].value}">View</router-link>
    </div>
  </div>
</template>

<script>
import { getTopicsAPI } from '../api/topics';

export default {
  name: 'Topics',
  data: () => ({
    topics: []
  }),
  async mounted(){
    const { data } = await getTopicsAPI();
    this.topics = data;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

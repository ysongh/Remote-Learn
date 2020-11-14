<template>
  <div class="container">
    <h1>Topics</h1>
    <router-link class="btn btn-primary" to="/addtopic">Add Topic</router-link>

    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="radiotype" value="Programming" @change="selectType">Programming
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="radiotype" value="Math" @change="selectType">Math
      </label>
    </div>
    <div class="form-check disabled">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="radiotype" value="English" @change="selectType">English
      </label>
    </div>
    <div class="form-check disabled">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="radiotype" value="History" @change="selectType">History
      </label>
    </div>
    <div class="form-check disabled">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="radiotype" value="Science" @change="selectType">Science
      </label>
    </div>

    <div v-bind:key="topic[3].value" v-for="topic in topics">
      <h2>{{ topic[6].value }}</h2>
      <p>{{ topic[7].value }}</p>
      <p>Likes {{ topic[8].value }} -- {{ topic[14].value }}</p>
      <p>{{ formatDate(topic[1].value) }}</p>
      <router-link class="btn btn-secondary" :to="{ path: '/topic/'+ topic[3].value}">View</router-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

import { getTopicsAPI, getTopicsByTypeAPI } from '../api/topics';

export default {
  name: 'Topics',
  data: () => ({
    topics: []
  }),
  async mounted(){
    const { data } = await getTopicsAPI();
    this.topics = data;
  },
  methods: { 
    async selectType(e){
      const { data } = await getTopicsByTypeAPI(e.target.value);
      this.topics = data;
    },
    formatDate(value){
      if(value){
        return moment(String(value)).format('MMMM Do YYYY');
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

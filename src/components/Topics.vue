<template>
  <div class="main container mt-3">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Topics</h1>
      <router-link class="btn primary-color btn-lg" to="/addtopic">Add Topic</router-link>
    </div>

    <div class="row">
      <div class="col-12 col-sm-4 col-md-3">
        <div class="jumbotron py-4 px-3">
          <h2 class="h4">Filter by:</h2>
          <div v-bind:key="type" v-for="type of types">
            <div class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="radiotype" :value="type" @change="selectType">{{type}}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-8 col-md-9">
        <div v-if="loading">
          <div v-bind:key="topic[3].value" v-for="topic in topics">
            <div class="jumbotron bg-light py-2 px-3 mb-3">
              <div class="d-flex justify-content-between">
                <div>
                  <h2>{{ topic[6].value }} <span class="badge badge-secondary">{{ topic[14].value }}</span></h2>
                  <p>{{ topic[7].value }}</p>
                </div>
                
                <div class="d-flex justify-content-end">
                  <p class="number-size">{{ topic[8].value }}</p>
                  <img class="icon" src="../assets/person-icon.svg" alt="Person">
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <p class="text-muted">{{ formatDate(topic[1].value) }}</p>
                <router-link class="btn secondary-color float-right" :to="{ path: '/topic/'+ topic[3].value}">View</router-link>
              </div>
            </div>
          </div>

          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <div v-bind:key="n" v-for="n in this.totalTopics">
                <li class="page-item mr-2">
                  <button class="page-link" v-on:click="pagination(n - 1)">{{ n }}</button>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <div v-else>
          <Spinner />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

import { getTopicsAPI } from '../api/topics';
import Spinner from './common/Spinner';

export default {
  name: 'Topics',
  components: {
    Spinner
  },
  data: () => ({
    types: ["Programming", "Math", "English", "History", "Science", "Music"],
    filter: null,
    topics: [],
    totalTopics: 0,
    loading: false
  }),
  async mounted(){
    const topicData = await getTopicsAPI(0, this.filter);
    this.topics = topicData.data;
    this.totalTopics = Math.ceil(topicData.metadata.totalRecords / 3);
    this.loading = true;
  },
  methods: { 
    async selectType(e){
      const topicData = await getTopicsAPI(0, e.target.value);
      this.filter = e.target.value;
      this.topics = topicData.data;
      this.totalTopics = Math.ceil(topicData.metadata.totalRecords / 3);
    },
    async pagination(num){
      const { data } = await getTopicsAPI(num, this.filter);
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
  span{
    font-size: 1rem;
    font-weight: 100;
  }

  .main{
    min-height: 70vh;
  }

  .icon{
    width: 2rem;
  }

  .number-size{
    font-size: 1.4rem;
    margin-top: 8px;
    margin-right: 4px;
  }
</style>

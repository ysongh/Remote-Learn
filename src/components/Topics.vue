<template>
  <div class="hello">
    <h1>Topics</h1>
    <div v-bind:key="topic[3].value" v-for="topic in topics">
      <h2>{{ topic[6].value }}</h2>
      <p>{{ topic[7].value }}</p>
      <p>Likes {{ topic[8].value }} -- {{ topic[14].value }}</p>
      <p>{{ topic[1].value }}</p>
    </div>
  </div>
</template>

<script>
import { headers } from '../config';

export default {
  name: 'Topics',
  data: () => ({
    topics: []
  }),
  mounted(){
    fetch('https://api.quickbase.com/v1/records/query',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({"from":"bqyx3rp8i","select":[1,3,6,7,8,14]})
      })
    .then(res => {
      if(res.ok){
        return res.json().then(res => {
          this.topics = res.data;
        });
      }
      return res.json().then(resBody => Promise.reject({status: res.status, ...resBody}));
    })
    .catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

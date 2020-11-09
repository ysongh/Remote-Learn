<template>
  <div class="hello">
    <h1>Topics</h1>
  </div>
</template>

<script>
import { headers } from '../config';

export default {
  name: 'Topics',
  mounted(){
    fetch('https://api.quickbase.com/v1/records/query',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({"from":"bqyx3rp8i","select":[5,6,7,8,9]})
      })
    .then(res => {
      if(res.ok){
        return res.json().then(res => console.log(res));
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

<template>
  <div class="container">
    <h1>Topics Detail</h1>
      <h2>{{ this.topic.length && this.topic[0][6].value  }}</h2>
      <p>{{ this.topic.length && this.topic[0][7].value }}</p>
      <p>Likes {{ this.topic.length && this.topic[0][8].value }} -- {{ this.topic.length && this.topic[0][14].value }}</p>
      <p>{{ this.topic.length && this.topic[0][1].value }}</p>
  </div>
</template>

<script>
import { getTopicByIdAPI } from '../api/topics';

export default {
  name: 'TopicDetail',
  data: () => ({
    topic: []
  }),
  async mounted(){
    const { data } = await getTopicByIdAPI(this.$route.params.id);
    this.topic = data;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

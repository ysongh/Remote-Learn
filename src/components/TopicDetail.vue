<template>
  <div class="container">
    <h1>Topics Detail</h1>
    <h2>{{ this.topic.length && this.topic[0][6].value  }}</h2>
    <p>{{ this.topic.length && this.topic[0][7].value }}</p>
    <p>Likes {{ this.topic.length && this.topic[0][8].value }} -- {{ this.topic.length && this.topic[0][14].value }}</p>
    <p>{{ this.topic.length && formatDate(this.topic[0][1].value, 1) }}</p>

    <h2>Comment</h2>
    <form @submit="addComment">
      <div class="form-group">
        <textarea
          class="form-control"
          type="text"
          name="detail"
          rows="3"
          v-model="detail"></textarea>    
        </div>
      <input type="submit" value="Add" class="btn btn-primary">
    </form>

    <div v-bind:key="comment[3].value" v-for="comment in comments">
      <p>{{ formatDate(comment[1].value, 2) }}</p>
      <p>{{ comment[7].value }}</p>
      <button class="btn btn-danger" @click="deleteComment(comment[3].value)">X</button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

import { getTopicByIdAPI } from '../api/topics';
import { getCommentsByTopicAPI, addCommentAPI, deleteCommentAPI } from '../api/comments';

export default {
  name: 'TopicDetail',
  data: () => ({
    topic: [],
    comments: [],
    detail: ''
  }),
  async mounted(){
    const { data } = await getTopicByIdAPI(this.$route.params.id);
    this.topic = data;

    const commentData = await getCommentsByTopicAPI(this.$route.params.id);
    this.comments = commentData.data;
  },
  methods:{
    async addComment(e){
      e.preventDefault();

      const isSuccess = await addCommentAPI(this.$route.params.id, this.detail);

      if(isSuccess){
        const { data } = await getCommentsByTopicAPI(this.$route.params.id);
        this.comments = data;
        this.detail = '';
      }
    },
    async deleteComment(id){
      const isSuccess = await deleteCommentAPI(id);
      if(isSuccess){
        const { data } = await getCommentsByTopicAPI(this.$route.params.id);
        this.comments = data;
      }
    },
    formatDate(value, type){
      if(value){
        if(type === 1) return moment(String(value)).format('MMMM Do YYYY');
        if(type === 2) return moment(String(value), "YYYYMMDD").fromNow();
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

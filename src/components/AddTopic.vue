<template>
  <div class="container mt-4">
    <div class="card m-auto">
      <h2 class="card-header primary-color text-center py-4">Add Topic</h2>
      <form class="card-body px-5" @submit="addTopic">
        <div class="form-group">
          <label class="font-weight-bold">Title</label>
          <input
            class="form-control"
            type="text"
            name="title"
            v-model="title">
        </div>
        <div class="form-group">
          <label class="font-weight-bold">Type</label>
          <input
            class="form-control"
            type="text"
            name="type"
            v-model="type">
        </div>
        <div class="form-group">
          <label class="font-weight-bold">Detail</label>
          <textarea
            class="form-control"
            type="text"
            name="detail"
            rows="7"
            v-model="detail"></textarea>    
        </div>
        <input type="submit" value="Add" class="btn primary-color btn-block btn-lg">
      </form>
    </div>
  </div>
</template>

<script>
import { addTopicAPI } from '../api/topics';

export default {
  name: 'AddTopic',
  data: () => ({
    title: "",
    type: "",
    detail: ""
  }),
  methods:{
    async addTopic(e){
      e.preventDefault();

      const newTopic = { 
        title: this.title,
        type: this.type,
        detail: this.detail
      }

      const isSuccess = await addTopicAPI(newTopic);

      if(isSuccess) this.$router.push('topics');
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card{
      max-width: 500px;
    }
</style>

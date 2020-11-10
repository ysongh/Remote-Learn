<template>
  <div class="container">
    <h1>Add Topic</h1>
    <form @submit="addTopic">
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
      <input type="submit" value="Add" class="btn btn-primary">
    </form>
  </div>
</template>

<script>

export default {
  name: 'AddTopic',
  data: () => ({
    title: "",
    type: "",
    detail: ""
  }),
  methods:{
    addTopic(e){
        e.preventDefault();

        const newTopic = { 
          title: this.title,
          type: this.type,
          detail: this.detail
        }
        
        console.log(newTopic);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

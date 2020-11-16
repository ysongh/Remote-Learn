<template>
  <div class="container mt-4">
    <div class="card w-50 m-auto">
      <h2 class="card-header primary-color text-center py-4">Apply to Teach</h2>
      <form class="card-body px-5" @submit="addTopic">
        <div class="form-group">
          <label class="font-weight-bold">Name</label>
          <input
            class="form-control"
            type="text"
            name="name"
            v-model="name">
        </div>
        <div class="form-group">
          <label class="font-weight-bold">Email</label>
          <input
            class="form-control"
            type="text"
            name="email"
            v-model="email">
        </div>
        <div class="form-group">
          <label class="font-weight-bold">Date</label>
          <input
            class="form-control"
            type="date"
            name="date"
            v-model="date">
        </div>
        <div class="form-group">
          <label class="font-weight-bold">Time</label>
          <input
            class="form-control"
            type="time"
            name="time"
            v-model="time">
        </div>
        <div class="form-group">
          <label class="font-weight-bold">Link</label>
          <input
            class="form-control"
            type="text"
            name="link"
            v-model="link">
        </div>
        <input type="submit" value="Add" class="btn primary-color btn-block btn-lg">
      </form>
    </div>
  </div>
</template>

<script>
import { addInstructorAPI } from '../api/instructors';

export default {
  name: 'AddTopic',
  data: () => ({
    name: "",
    email: "",
    date: "",
    time: "",
    link: ""
  }),
  methods:{
    async addTopic(e){
      e.preventDefault();

      const newInstructor = { 
        name: this.name,
        email: this.email,
        date: this.date,
        time: this.time,
        link: this.link
      }

      const isSuccess = await addInstructorAPI(this.$route.params.id, newInstructor);

      if(isSuccess) this.$router.push('/topic/' + this.$route.params.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

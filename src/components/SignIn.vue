<template>
  <div class="container mt-4">
    <div class="card m-auto">
      <h2 class="card-header primary-color text-center py-4">Sign In</h2>
      <form class="card-body px-5" @submit="signIn">
        <div class="form-group">
          <label class="font-weight-bold">Email</label>
          <input
            class="form-control"
            type="text"
            name="email"
            v-model="email">
        </div>
         <div class="form-group">
          <label class="font-weight-bold">Password</label>
          <input
            class="form-control"
            type="password"
            name="password"
            v-model="password">
        </div>
        <input type="submit" value="Sign In" class="btn primary-color btn-block btn-lg">
        <button class="btn btn-secondary btn-block btn-lg" @click="register()">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script>
import { signInAPI, registerAPI } from '../api/users';

export default {
  name: 'SignIn',
  data: () => ({
    email: "",
    password: "",
  }),
  methods:{
    async signIn(e){
      e.preventDefault();

      const isSuccess = await signInAPI(this.email, this.password);

      if(isSuccess) this.$router.push('topics');
    },
    async register(){
      const isSuccess = await registerAPI(this.email, this.password);

      if(isSuccess) this.$router.push('topics');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
      min-height: 520px;
    }
    .card{
      max-width: 500px;
    }
</style>

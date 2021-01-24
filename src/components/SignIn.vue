<template>
  <div class="container mt-4">
    <div class="card m-auto">
      <h2 class="card-header primary-color text-center py-4">Sign In</h2>
      <form class="card-body px-5">
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
        <button class="btn btn-secondary btn-block btn-lg">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignIn',
  data: () => ({
    email: "",
    password: "",
  })
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

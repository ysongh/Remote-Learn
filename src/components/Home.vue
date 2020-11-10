<template>
  <div class="container">
    <h1>Remote Learn</h1>
    <router-link class="btn btn-primary" to="/topics">List of Topics</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

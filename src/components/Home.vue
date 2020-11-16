<template>
  <div>
    <header>
      <div class="container">
        <div class="row pt-5">
          <div class="col-12 col-md-6 mt-5">
            <h1>Want someone to teach you?</h1>
            <p>Suggest a topic for someone to teach you on</p>
            <router-link class="btn primary-color btn-lg" to="/topics">Browse Topics</router-link>
          </div>
          <div class="col-12 col-md-6">
            <img src="../assets/hero.svg" alt="Instrutor and students">
          </div>
        </div>
      </div>
    </header>
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
  header{
    background-color: #54AA63;
    height: 90vh;
  }

  header h1{
    font-size: 4rem;
  }

  header p{
    font-size: 1.4rem;
  }

  header img{
    margin-left: 1rem;
  }

</style>

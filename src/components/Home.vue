<template>
  <div>
    <header>
      <div class="container">
        <div class="row pt-5">
          <div class="col-12 col-md-6">
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

    <main class="container">
      <section class="howitworks my-5">
        <h2 class="h1 text-center">How Remote Learn Works?</h2>

        <div class="row">
          <div class="col-12 col-md-6">
            <img src="../assets/howitworks3.svg" alt="Suggest topic">
          </div>
          <div class="col-12 col-md-6">
            <p>Suggest a topic for someone to teach</p>
          </div>

          <div class="col-12 col-md-6">
            <img src="../assets/howitworks1.svg" alt="Wait for instructor">
          </div>
          <div class="col-12 col-md-6">
            <p>Wait for instructor to apply and set the date and the link to join</p>
          </div>

          <div class="col-12 col-md-6">
            <img src="../assets/howitworks2.svg" alt="Join the meeting">
          </div>
          <div class="col-12 col-md-6">
            <p>Join the meeting and learn</p>
          </div>
        </div>
      </section>

      <section class="whyyouteach my-5">
        <h2 class="h1 text-center mb-4">Why should you teach?</h2>

        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card mb-3">
              <div class="card-body">
                  <img src="../assets/whyyouteach3.svg" alt="Icon">
                  <p class="card-title text-center mt-3">Get Experinece</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="card mb-3">
              <div class="card-body">
                  <img src="../assets/whyyouteach1.svg" alt="Icon">
                  <p class="card-title text-center mt-3">Promte yourself</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="card mb-3">
              <div class="card-body">
                  <img src="../assets/whyyouteach2.svg" alt="Icon">
                  <p class="card-title text-center mt-3">Earn Tips</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
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
    min-height: 90vh;
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

  .howitworks p{
    font-size: 2rem;
    font-weight: 200;
    margin-top: 5rem;
  }

  .whyyouteach img{
    display: block;
    margin: auto;
  }

  .whyyouteach p{
    font-size: 1.8rem;
    font-weight: 200;
  }
  
  @media only screen and (max-width: 750px) {
    header img{
      margin-top: 2rem;
      margin-left: 0;
      margin-bottom: 3rem;
    }
  }
</style>

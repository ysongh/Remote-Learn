<template>
  <div>
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  .primary-color{ background-color: #D9D872 !important; }
  .secondary-color{ background-color: #58B368 !important; }
</style>

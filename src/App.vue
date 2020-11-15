<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  .primary-color{ background-color: #D9D872; }
  .secondary-color{ background-color: #58B368; }
</style>

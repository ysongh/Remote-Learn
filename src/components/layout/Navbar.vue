<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <li class="navbar-brand" data-toggle="collapse" data-target=".navbar-collapse.show">
                <router-link class="nav-link" to="/">
                    <img src="../../assets/logo.png" alt="Logo">
                </router-link>
            </li>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <router-link class="nav-link" to="/">About</router-link>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <router-link class="nav-link" to="/topics">Topics</router-link>
                    </li>
                </ul>
                <div v-if="address">
                    <div class="dropdown">
                        <button class="btn primary-color dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ address.substring(0,7)}}...{{ address.substring(35,42) }}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" @click="portis.showPortis()">Open Wallet</a>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <button class="btn primary-color" @click="getPortis()">Login to your Wallet</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',
  computed: mapGetters(['address', 'portis']),
  methods: mapActions(['getPortis'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img{
        width: 5rem;
    }
</style>

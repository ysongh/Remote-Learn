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
                            <a v-if="walletType === 'Portis'" class="dropdown-item" data-toggle="collapse" data-target=".navbar-collapse.show" @click="portis.showPortis()">
                                Open Wallet
                            </a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <button v-if="loading" class="btn btn-secondary">Loading...</button>
                    <div class="dropdown" v-else>
                        <button class="btn primary-color dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Login to your Wallet
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" @click="loginWithPortis()">
                                With Portis
                            </a>
                            <a class="dropdown-item" @click="loginWithMetaMask()">
                                With MetaMask
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <LogoutModal></LogoutModal>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import LogoutModal from '../modal/LogoutModal';

export default {
  name: 'Navbar',
  components: {
    LogoutModal
  },
  data() {
    return {
        loading: false,
    }
  },
  computed: mapGetters(['address', 'portis', 'walletType']),
  methods: {
    ...mapActions(['getPortis', 'getMetaMask']),
    async loginWithPortis(){
        this.loading = true;
        await this.getPortis();
        this.loading = false;
    },
    async loginWithMetaMask(){
        this.loading = true;
        await this.getMetaMask();
        this.loading = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img{
        width: 5rem;
    }
</style>

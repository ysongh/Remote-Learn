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
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <router-link class="nav-link" to="/">About</router-link>
                    </li>
                    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <router-link class="nav-link" to="/topics">Topics</router-link>
                    </li>
                    <li class="nav-item">
                        <p class="mt-2">{{ address }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Portis from '@portis/web3';
import Web3 from 'web3';
import { mapGetters, mapActions } from 'vuex';

import { portisId } from '../../config';

export default {
  name: 'Navbar',
  computed: mapGetters(['address']),
  methods: mapActions(['updateAddress']),
  mounted(){
    const portis = new Portis(portisId, 'mainnet');
    const web3 = new Web3(portis.provider);

    web3.eth.getAccounts((error, accounts) => {
        this.updateAddress(accounts[0]);
    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img{
        width: 5rem;
    }
</style>

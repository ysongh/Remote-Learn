<template>
    <div class="profile container mt-3">
        <h1>Profile for {{this.$route.params.email}}</h1>
        <router-link v-if="!channel && this.email == this.$route.params.email" class="btn primary-color" :to="{ path: '/addchannel/'+ this.$route.params.email}">
          Create Channel
        </router-link>
        <p v-if="channel">Balance: {{balance}}</p>
        <div v-if="this.email && this.email !== this.$route.params.email && channel">
          <button class="btn primary-color" @click="depositToken(10)">
            Give 10 Teach Token
          </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getUserIdByEmailAPI, getChannelAddressAPI } from '../api/users';

export default {
  name: 'Profile',
  data: () => ({
    channel: null,
    balance: 0
  }),
  async mounted(){
    const userId = await getUserIdByEmailAPI(this.$route.params.email);
    const channelData = await getChannelAddressAPI(userId);
    this.channel = channelData;

    const res = await fetch('http://localhost:5001/api/v1/channels/0x8AA23bF3065edF4e8748FE9cCb76CD41BA75574E/' + this.channel);
    const data = await res.json();
    this.balance = data.balance;
  },
  computed: mapGetters(['email']),
  methods:{
    async depositToken(amount){
      const res = await fetch('http://localhost:5001/api/v1/channels/0x8AA23bF3065edF4e8748FE9cCb76CD41BA75574E/' + this.channel, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "total_deposit": amount
        })
      });
      const data = await res.json();
      this.balance = data.balance;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .profile{
        min-height: 525px;
    }
</style>

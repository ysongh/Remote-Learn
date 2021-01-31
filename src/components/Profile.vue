<template>
    <div class="profile container mt-3">
        <h1>Profile for {{this.$route.params.email}}</h1>

        <div v-if="!channel && this.email == this.$route.params.email">
           <router-link  class="btn primary-color" :to="{ path: '/addchannel/'+ this.$route.params.email}">
            Create Channel
          </router-link>
          <p class="text-muted">Earn token by creating a channel</p>
        </div>
       

        <div class="row">
            <div class="col-12 col-md-6">
              <div class="card bg-light mb-3" v-if="channel">
                <div class="card-body">
                  <p>Address: {{channelData ? channelData.partner_address : ''}}</p>
                  <p>Balance: {{balance}}</p>
                </div>
              </div>
        
              <div v-if="this.email && this.email !== this.$route.params.email && channel">
                <h2 class="h3">Send Teach Token</h2>
                
                <div v-if="!loading" class="d-flex flex-wrap">
                  <div v-for="n in numbers" :key="n">
                    <button class="btn primary-color mr-3 mb-3" @click="depositToken(n)">
                      Give {{n}}
                    </button>
                  </div>
                </div>
                <Spinner v-else />
              </div>

              <div v-if="this.email === this.$route.params.email && channel">
                <div class="form-group">
                  <label class="font-weight-bold">Withdraw Token</label>
                  <input
                    class="form-control"
                    type="number"
                    name="Withdraw Amount"
                    v-model="withdrawAmount">
                </div>
                <button v-if="!loading" class="btn primary-color" @click="withdrawToken()">Withdraw</button>
                <Spinner v-else />
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getUserIdByEmailAPI, getChannelAddressAPI } from '../api/users';

import Spinner from './common/Spinner';

export default {
  components: { Spinner },
  name: 'Profile',
  data: () => ({
    numbers: [1, 5, 10, 25, 50, 100, 250, 500, 1000],
    channel: null,
    balance: 0,
    channelData: null,
    withdrawAmount: 0,
    loading: false
  }),
  async mounted(){
    const userId = await getUserIdByEmailAPI(this.$route.params.email);
    const channelData = await getChannelAddressAPI(userId);
    this.channel = channelData;

    const res = await fetch('http://localhost:5001/api/v1/channels/0x8AA23bF3065edF4e8748FE9cCb76CD41BA75574E/' + this.channel);
    const data = await res.json();
    this.balance = data.balance;
    this.channelData = data;
    console.log(data);
  },
  computed: mapGetters(['email']),
  methods:{
    async depositToken(amount){
      this.loading = true;
      try{
        const res = await fetch('http://localhost:5001/api/v1/channels/0x8AA23bF3065edF4e8748FE9cCb76CD41BA75574E/' + this.channel, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              "total_deposit": +amount + +this.balance
          })
        });
        const data = await res.json();
        this.balance = data.balance;
        this.loading = false;
      }
      catch(err){
        console.error(err);
        this.loading = false;
      }
    },
    async withdrawToken(){
      this.loading = true;
      try{
        const res = await fetch('http://localhost:5001/api/v1/channels/0x8AA23bF3065edF4e8748FE9cCb76CD41BA75574E/' + this.channel, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              "total_withdraw": this.withdrawAmount
          })
        });
        const data = await res.json();
        console.log(data);
        this.balance -= this.withdrawAmount;
        this.withdrawAmount = 0;
        this.loading = false;
      }
      catch(err){
        console.error(err);
        this.loading = false;
      }
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

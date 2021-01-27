<template>
  <div class="addchannel container mt-4">
    <div class="card m-auto">
      <h2 class="card-header primary-color text-center py-4">Create Channel</h2>
      <form class="card-body px-5" @submit="addTopic">
        <div class="form-group">
          <label class="font-weight-bold">Wallet Address</label>
          <input
            class="form-control"
            type="text"
            name="address"
            v-model="address">
        </div>
        <input type="submit" value="Create" class="btn primary-color btn-block btn-lg">
      </form>
    </div>
  </div>
</template>

<script>
import { getUserIdByEmailAPI, createChannelAPI } from '../api/users';

export default {
  name: 'AddChannel',
  data: () => ({
    address: ""
  }),
  methods:{
    async addTopic(e){
        e.preventDefault();

        const res = await fetch('http://localhost:5001/api/v1/channels', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "partner_address": this.address,
                "token_address": "0x8AA23bF3065edF4e8748FE9cCb76CD41BA75574E",
            })
        });
        const data = await res.json();
        console.log(data)

        const userId = await getUserIdByEmailAPI(this.$route.params.email);
        const isSuccess = await createChannelAPI(userId, this.address);

        if(isSuccess) this.$router.push('/profile/' + this.$route.params.email);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .addchannel{
        min-height: 520px;
    }

    .card{
      max-width: 500px;
    }
</style>

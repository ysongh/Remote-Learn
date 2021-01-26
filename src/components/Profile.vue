<template>
    <div class="profile container mt-3">
        <h1>Profile for {{this.$route.params.email}}</h1>
        <button v-if="!channel" class="btn primary-color" @click="createChannel()">
            Create Channel
        </button>
    </div>
</template>

<script>
import { getUserIdByEmailAPI, getChannelAddressAPI, createChannelAPI } from '../api/users';

export default {
  name: 'Profile',
  data: () => ({
    channel: null,
  }),
  async mounted(){
    const userId = await getUserIdByEmailAPI(this.$route.params.email);
    const channelData = await getChannelAddressAPI(userId);
    this.channel = channelData;
  },
  methods:{
    async createChannel(){
      const userId = await getUserIdByEmailAPI(this.$route.params.email);

      const isSuccess = await createChannelAPI(userId, 'fdsifjiapjidw2');
      console.log(isSuccess)
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

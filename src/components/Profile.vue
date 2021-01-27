<template>
    <div class="profile container mt-3">
        <h1>Profile for {{this.$route.params.email}}</h1>
        <router-link v-if="!channel" class="btn primary-color" :to="{ path: '/addchannel/'+ this.$route.params.email}">
          Create Channel
        </router-link>
    </div>
</template>

<script>
import { getUserIdByEmailAPI, getChannelAddressAPI } from '../api/users';

export default {
  name: 'Profile',
  data: () => ({
    channel: null,
  }),
  async mounted(){
    const userId = await getUserIdByEmailAPI(this.$route.params.email);
    const channelData = await getChannelAddressAPI(userId);
    this.channel = channelData;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .profile{
        min-height: 525px;
    }
</style>

<template>
    <div class="profile container mt-3">
        <h1>Profile for {{this.$route.params.email}}</h1>
    </div>
</template>

<script>
import { getChannelAddressAPI } from '../api/users';

export default {
  name: 'Profile',
  async mounted(){
    let id = 1;
    await getChannelAddressAPI(id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .profile{
        min-height: 525px;
    }
</style>

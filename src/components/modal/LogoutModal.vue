<template>
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="logoutModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p class="mt-3">Are you sure you want to log out of your wallet?</p>
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn primary-color mr-3" @click="logout()" data-dismiss="modal">Yes</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                    </div>
                </div>
                <div class="modal-footer mb-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'LogoutModal',
  props: ['amount'],
  computed: mapGetters(['portis', 'walletType']),
  methods: {
    ...mapActions(['getPortis', 'removeAddress']),
    logout(){
        if(this.walletType === 'Portis') this.portis.logout();
        
        this.removeAddress();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

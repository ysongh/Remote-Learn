<template>
    <div class="modal fade" id="tipModal" tabindex="-1" role="dialog" aria-labelledby="tipModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Tip Instructor</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form v-if="address">
                    <div class="form-group">
                        <label class="font-weight-bold">Amount</label>
                        <input
                            class="form-control"
                            type="number"
                            name="amount"
                            v-model="localAmount"
                            @change="$emit('update:amount', localAmount)">
                    </div>
                </form>

                <div v-else>
                    <p class="notlogin-message text-center">Please log in to your wallet</p>
                    <center>
                        <button class="btn secondary-color btn-lg mr-4" @click="loginWithPortis()">
                            Portis
                        </button>
                        <button class="btn secondary-color btn-lg" @click="loginWithMetaMask()">
                            MetaMask
                        </button>
                    </center>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button
                    v-if="address"
                    type="button"
                    class="btn primary-color"
                    v-on:click="$emit('tip-instructor')"
                    :disabled=isDisabled>
                    Send
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TipModal',
  props: ['amount'],
  computed: {
        ...mapGetters(['address']),
        isDisabled() {
            return this.localAmount <= 0;
        }
  },
  methods: {
    ...mapActions(['getPortis', 'getMetaMask']),
    async loginWithPortis(){
        await this.getPortis();
    },
    async loginWithMetaMask(){
        await this.getMetaMask();
    }
  },
  data() {
    return {
        localAmount: '',
        loading: false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .notlogin-message{
        color: #b1af52;
        font-size: 1.3rem;
    }
</style>

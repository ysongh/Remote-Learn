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
                            type="text"
                            name="name"
                            v-model="localAmount"
                            @change="$emit('update:amount', localAmount)">
                    </div>
                </form>
                <p v-else class="mt-3">Please log in to your wallet</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button v-if="address" type="button" class="btn primary-color" v-on:click="$emit('tip-instructor')" data-dismiss="modal">Send</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TipModal',
  props: ['amount'],
  computed: mapGetters(['address']),
  data() {
    return {
        localAmount: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

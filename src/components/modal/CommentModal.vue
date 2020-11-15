<template>
    <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="commentModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Comment</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label class="font-weight-bold">Name</label>
                        <input
                            class="form-control"
                            type="text"
                            name="name"
                            v-model="localName"
                            @change="$emit('update:name', localName)">
                    </div>
                    <div class="form-group">
                        <label class="font-weight-bold">Detail</label>
                        <textarea
                            class="form-control"
                            type="text"
                            name="detail"
                            rows="3"
                            v-model="localDetail"
                            @change="$emit('update:detail', localDetail)"></textarea>    
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" v-on:click="$emit('add-comment')" data-dismiss="modal">Submit</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommentModal',
  props: ['name', 'detail'],
  data() {
    return {
        localName: 'Guest',
        localDetail: ''
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

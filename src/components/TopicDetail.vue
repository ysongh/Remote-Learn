<template>
  <div class="main container mt-4">
    <div class="row">
      <div class="col-12 col-md-5">
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1>{{ this.topic.length && this.topic[0][6].value  }}</h1>
              <span class="badge badge-secondary">{{ this.topic.length && this.topic[0][14].value }}</span>
            </div>
            <p>{{ this.topic.length && this.topic[0][7].value }}</p>
            <p class="text-muted">{{ this.topic.length && formatDate(this.topic[0][1].value, 1) }}</p>
            <router-link class="btn primary-color btn-block btn-lg" :to="{ path: '/addinstructor/' + this.$route.params.id}">Apply to Teach</router-link>
          </div>
        </div>

        <div class="card mb-3">
          <div class="card-body">
            <h2>Instructor</h2>
            <div v-bind:key="instructor[3].value" v-for="instructor in instructors">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <img src="../assets/defaultuser.png" alt="User">
                  <div class="instructor-info">
                    <p>{{ instructor[7].value }}</p>
                    <p>Start: {{ instructor[10].value }} at {{ instructor[12].value }}</p>
                    <p>Link: {{ instructor[14].value }}</p>
                  </div>
                </div>
                <div v-if="instructor[16].value">
                  <button class="btn secondary-color btn-lg" data-toggle="modal" data-target="#tipModal" @click="setInstructorAddress(instructor[16].value)">
                    Tip
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-7">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2>Comments</h2>
              <button type="button" class="btn primary-color btn-lg" data-toggle="modal" data-target="#commentModal">
                Add
              </button>
            </div>
            <div v-bind:key="comment[3].value" v-for="comment in comments">
              <div class="d-flex justify-content-between align-items-start">
                <div class="d-flex align-items-start">
                  <img src="../assets/defaultuser.png" alt="User">
                  <div>
                    <p>{{ comment[7].value }}</p>
                    <p class="text-muted">{{ formatDate(comment[1].value, 2) }} by {{ comment[12].value }}</p>
                  </div>
                </div>
                <button class="btn btn-danger" @click="deleteComment(comment[3].value)">X</button>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommentModal @add-comment="addComment" :name.sync="name" :detail.sync="detail"></CommentModal>
    <TipModal
      @tip-instructor="tipInstructor" 
      :instructorAddress="instructorAddress" 
      :amount.sync="amount"
      :tipLoading="tipLoading"
    ></TipModal>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import $ from "jquery";

import { getTopicByIdAPI } from '../api/topics';
import { getCommentsByTopicAPI, addCommentAPI, deleteCommentAPI } from '../api/comments';
import { getInstructorByTopicAPI } from '../api/instructors';
import CommentModal from './modal/CommentModal';
import TipModal from './modal/TipModal';

export default {
  name: 'TopicDetail',
  components: {
    CommentModal,
    TipModal
  },
  computed: mapGetters(['address', 'blockchain']),
  data: () => ({
    topic: [],
    instructors: [],
    comments: [],
    name: 'Guest',
    detail: '',
    instructorAddress: '',
    amount: '',
    tipLoading: false
  }),
  async mounted(){
    const { data } = await getTopicByIdAPI(this.$route.params.id);
    this.topic = data;

    const instructorsData = await getInstructorByTopicAPI(this.$route.params.id);
    this.instructors = instructorsData.data;

    const commentData = await getCommentsByTopicAPI(this.$route.params.id);
    this.comments = commentData.data;
  },
  methods:{
    async addComment(){
      const isSuccess = await addCommentAPI(this.$route.params.id, this.name, this.detail);

      if(isSuccess){
        const { data } = await getCommentsByTopicAPI(this.$route.params.id);
        this.comments = data;
        this.detail = '';
      }
    },
    async deleteComment(id){
      const isSuccess = await deleteCommentAPI(id);
      if(isSuccess){
        const { data } = await getCommentsByTopicAPI(this.$route.params.id);
        this.comments = data;
      }
    },
    async tipInstructor(){
      try{
        this.tipLoading = true;

        await this.blockchain.methods
          .tipInstructor(this.instructorAddress)
          .send({ from: this.address, value: window.web3.utils.toWei(this.amount.toString(), 'Ether')});
        
        $("#tipModal").modal("hide");
        this.tipLoading = false;
      }
      catch(err){
        console.error(err);
        this.tipLoading = false;
      }
      
    },
    setInstructorAddress(instructorAddress){
      this.instructorAddress = instructorAddress;
    },
    formatDate(value, type){
      if(value){
        if(type === 1) return moment(String(value)).format('MMMM Do YYYY');
        if(type === 2) return moment(String(value), "YYYYMMDD").fromNow();
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 5rem;
    margin-right: .7rem;
  }
  
  .main{ min-height: 70vh; }

  .instructor-info p{ margin-bottom: 3px; }
</style>

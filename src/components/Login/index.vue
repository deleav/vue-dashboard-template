<template>
  <div class="container">
    <div class="col-md-3">
      Hello {{ msg }}
      {{ email }}
      {{ password }}
    </div>
    <input type="email" :value='email' @input='updateEmail({value: $event.target.value})' />
    <input type="password" :value='password' @input='updatePassword({value: $event.target.value})' />
    <!--<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="d-block img-fluid" src="../assets/logo.png" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="../assets/logo.png" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block img-fluid" src="../assets/logo.png" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>-->
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import store from '@/store';
  import * as types from '@/store/modules/login/types';


  export default {
    store,
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        types,
      };
    },
    computed: {
      ...mapState('login', [
        'email',
        'password'
      ])
    },
    methods: {
      ...mapMutations('login', [
        'updateEmail',
        'updatePassword'
      ])
    }
  };
</script>

<style lang="scss" scoped>
#carouselExampleControls {
  & > div {
    background: gray;
  }

  & > a {

  }
}
</style>

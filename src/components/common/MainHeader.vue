<template lang="jade">
  .container-fluid.mainHeader
    .row.align-items-center.h-100
      .col-4.offset-8.text-white
        .fa.fa-user(aria-hidden="true")
        span.mx-2 {{ email }}
        .fa.fa-sign-out(aria-hidden="true", @click="logout")
</template>

<script>
  import { mapState } from 'vuex';
  import logoutApi from '@/api/logout';

  export default {
    computed: {
      ...mapState('user', [
        'email'
      ])
    },
    methods: {
      logout() {
        logoutApi.logout().then(res => {
          console.log(res);
          this.$cookie.delete('email');
          this.$router.push('login');
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mainHeader {
    position: relative;
    height: 60px;
    background: #5CC9F5;
  }
</style>
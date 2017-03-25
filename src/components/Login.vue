<template lang="jade">
  .row.h-100
    .container.my-auto
      .card.mx-auto(style='max-width: 688px; height: 400px;')
        .container.my-auto
          label.col-md-2.my-auto(for='email') Email:
          input#email.col-md-4(type='email', :value='email', @input='updateEmail({value: $event.target.value})')
          .w-100.mb-1
          label.col-md-2.my-auto(for='password') Password:
          input#password.col-md-4(type='password', :value='password', @input='updatePassword({value: $event.target.value})')
          .w-100.mb-1
          button.col-md-2.offset-md-4.btn.btn-outline-secondary(@click="login") Login
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import store from '@/store';
  import loginApi from '@/api/login';

  export default {
    store,
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
      ]),
      login() {
        console.log({
          email: this.email,
          password: this.password
        });
        loginApi.login({
          email: this.email,
          password: this.password
        }).then(function( value ) {
          console.log( JSON.parse( value ) );
          let expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + 2);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>

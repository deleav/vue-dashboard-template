<template lang="jade">
  .container-fluid.h-100
    .row.align-items-center.h-100
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
  import responseApi from '@/api/response';

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
        'updatePassword',
        'updateToken'
      ]),
      login() {
        let user = {
          email: this.email,
          password: this.password
        };
        loginApi.login( user ).then(res => {
          if ( res.code === 200 ) {
            user.username = res.userinfo.username;
            let expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 2);
            loginApi.uLogin( user ).then(res => {
              console.log(res);
              if ( res.token )
                this.updateToken({ value: res.token });
              this.$cookie.set('email', user.email, { expires: expireDate });
              this.$router.push('/');
            }, error => responseApi.errorResponse( error ));
          } else {
            let error = {
              msg: res.msg,
              code: res.code
            };
            responseApi.errorResponse( error );
          }
        }, error => responseApi.errorResponse( error ));
      }
    }
  };
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
</style>

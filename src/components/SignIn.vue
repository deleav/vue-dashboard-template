<template>
  <div>
    <b-btn @click="$root.$emit('show::modal','modal1')">Launch demo modal</b-btn>

    <!-- Main UI -->
    <div class="mt-3 mb-3">
      Submitted Names:
      <ul>
        <li v-for="n in names">{{n}}</li>
      </ul>
    </div>

    <!-- Modal Component -->
    <b-modal id="modal1" title="Submit your name" @ok="submit" @shown="clearName">
      <form @submit.stop.prevent="submit">
        <b-form-input type="text" placeholder="Enter your name" v-model="name" required></b-form-input>
      </form>
    </b-modal>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        name: '',
        names: []
      }
    },
    methods: {
      clearName() {
        this.name = '';
      },
      submit() {
        if (!this.name) {
          /* eslint-disable no-alert */
          alert('Please enter your name');
          return false;
        }
        this.names.push(this.name);
        this.name = '';

        // Ensure modal closes
        this.$root.$emit('hide::modal', 'modal1');
      }
    }
  }
</script>
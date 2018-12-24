<template>
  <div>Please wait.</div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'AuthHandler',
    created() {
      // Any lifecycle event up to mounted could be used but the documentation
      // suggests this lifecycle method so we do the same
      this.loginComplete(window.location.hash);
    },
    methods: {
      ...mapActions(['loginComplete'])
    }
  };
</script>

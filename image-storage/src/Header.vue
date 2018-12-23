<template>
  <section class="ui secondary pointing menu">
    <a href="" class="active item">Image Storage</a>
    <div class="right menu">
      <a v-if="!authenticated" href="#" @click="login" class="ui item">Login</a>
      <div v-if="authenticated" class="horizontal">
        <a href="" class="item">Galleries</a>
        <a href="" class="item">Upload</a>
        <a href="#" class="item" @click="logout">Logout</a>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'Header',
    data() {
      return { authenticated: false };
    },
    methods: {
      ...mapActions(['login', 'logout'])
    }
  };
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>

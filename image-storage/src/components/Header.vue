<template>
  <section class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <div class="right menu">
      <a v-if="!isAuthenticated" href="#" @click="login" class="ui item">Login</a>
      <div v-if="isAuthenticated" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a href="#" class="item" @click="logout">Logout</a>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'Header',
    computed: {
      ...mapGetters(['isAuthenticated'])
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

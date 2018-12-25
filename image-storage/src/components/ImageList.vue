<template>
  <div>
    <div v-if="isAuthenticated" class="image-container">
      <img v-for="image of allImages" :src="image.link"/>
    </div>
    <div v-else="!isAuthenticated">
      Log in to get started.
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'ImageList',
    created() {
      this.fetchImages();
    },
    computed: {
      ...mapGetters(['allImages', 'isAuthenticated'])
    },
    methods: {
      ...mapActions(['fetchImages'])
    }
  };
</script>

<style scoped>
  .image-container {
    column-count: 3;
    column-gap: 0;
  }

  img {
    max-width: 100%;
    padding: 5px;
  }
</style>

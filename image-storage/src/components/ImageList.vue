<template>
  <div class="image-container">
    <img v-for="image of allImages" :src="image.link"/>
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
      ...mapGetters(['allImages'])
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

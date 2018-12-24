<template>
  <div>
    <img v-for="image of allImages" :src="image.link" width="200px" />
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

<template>
  <div>ImageList - {{allImages.length}}</div>
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

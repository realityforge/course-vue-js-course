<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <img :alt="video.snippet.title" :src="thumbnailUrl" class="mr-3"/>
    <div class="media-body">
      {{video.snippet.title}}
    </div>
  </li>
</template>

<script>
  export default {
    name: 'VideoListItem',
    props: ['video'],
    computed: {
      // Extracting a computed simplifies the code in the template
      thumbnailUrl() {
        return this.video.snippet.thumbnails.default.url;
      }
    },
    methods: {
      onVideoSelect() {
        this.$emit('videoSelect', this.video);
      }
    }
  };
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }

  li:hover {
    background-color: lightgrey;
  }
</style>

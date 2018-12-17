<template>
  <li class="list-group-item"><img :alt="video.snippet.title" :src="thumbnailUrl"/> {{video.snippet.title}}</li>
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
    }
  };
</script>

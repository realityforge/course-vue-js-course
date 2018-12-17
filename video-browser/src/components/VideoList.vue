<template>
  <div class="col-md-4">
    <h4>Video List</h4>
    <ul class="list-group">
      <VideoListItem v-for="video of videos" :video="video" :key="video.etag" @videoSelect="onVideoSelect"></VideoListItem>
    </ul>
  </div>
</template>

<script>
  import VideoListItem from './VideoListItem';

  export default {
    name: 'VideoList',
    props: {
      // Verify Prop video is an Array
      videos: Array
    },
    components: {
      VideoListItem
    },
    methods: {
      onVideoSelect(v) {
        this.$emit('videoSelect', v);
      }
    }
  };
</script>

<style></style>

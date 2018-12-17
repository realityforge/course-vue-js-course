<template>
  <div>
    <h4>Video List</h4>
    <ul class="list-group">
      <VideoListItem v-for="video of videos" :video="video" :key="video.etag"></VideoListItem>
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
    }
  };
</script>

<style></style>

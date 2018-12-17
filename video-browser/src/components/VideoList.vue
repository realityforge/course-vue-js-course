<template>
  <div>
    <h4>Video List</h4>
    <ul>
      <li v-for="video of videos">{{video.snippet.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'VideoList',
    props: {
      // Verify Prop video is an Array
      videos: Array
    }
  };
</script>

<style></style>

<template>
  <!-- Can only have one top-level element in template tag -->
  <div class="container">
    <SearchBar @searchTermChanged="onSearchTermChanged"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import SearchBar from './components/SearchBar';
  import VideoDetail from './components/VideoDetail';
  import VideoList from './components/VideoList';

  // Account created via https://console.developers.google.com
  // Described at https://developers.google.com/youtube/v3/
  const YOUTUBE_API_KEY = 'AIzaSyBFU5xoFyIF62AgJ-FQmMJnvH3muid9xr0';

  export default {
    name: 'app',
    components: {
      VideoDetail,
      SearchBar,
      VideoList
    },
    data() {
      return { videos: [], selectedVideo: null };
    },
    methods: {
      onVideoSelect(video) {
        this.selectedVideo = video;
      },
      onSearchTermChanged(searchTerm) {
        axios.get('https://www.googleapis.com/youtube/v3/search',
          { params: { key: YOUTUBE_API_KEY, type: 'video', part: 'snippet', q: searchTerm } }
        ).then(response => this.videos = response.data.items);
      }
    }
  };
</script>

<style>
</style>

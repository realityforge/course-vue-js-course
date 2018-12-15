<template>
  <!-- Can only have one top-level element in template tag -->
  <div>
    <SearchBar @searchTermChanged="onSearchTermChanged"></SearchBar>
  </div>
</template>

<script>
  import axios from 'axios';
  import SearchBar from './components/SearchBar';

  // Account created via https://console.developers.google.com
  // Described at https://developers.google.com/youtube/v3/
  const YOUTUBE_API_KEY = 'AIzaSyBFU5xoFyIF62AgJ-FQmMJnvH3muid9xr0';

  export default {
    name: 'app',
    components: {
      SearchBar
    },
    methods: {
      onSearchTermChanged(searchTerm) {
        axios.get('https://www.googleapis.com/youtube/v3/search',
          { params: { key: YOUTUBE_API_KEY, type: 'video', part: 'snippet', q: searchTerm } }
        ).then(response => console.log(response));
      }
    }
  };
</script>

<style>
</style>

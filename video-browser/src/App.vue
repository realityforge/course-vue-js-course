<template>
  <!-- Can only have one top-level element in template tag -->
  <div>
    <SearchBar @searchTermChanged="onSearchTermChanged"></SearchBar>
  </div>
</template>

<script>
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
        // eslint-disable-next-line
        console.log(searchTerm);
      }
    }
  };
</script>

<style>
</style>

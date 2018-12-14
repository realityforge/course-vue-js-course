<template>
  <!-- Can only have one top-level element in template tag -->
  <div>
    <SearchBar @searchTermChanged="onSearchTermChanged"></SearchBar>
  </div>
</template>

<script>
  import SearchBar from './components/SearchBar';

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

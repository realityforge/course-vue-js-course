<template>
  <!-- Can only have one top-level element in template tag -->
  <div>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
  import SearchBar from './components/SearchBar';

  export default {
    name: 'app',
    components: {
      SearchBar
    }
  };
</script>

<style>
</style>

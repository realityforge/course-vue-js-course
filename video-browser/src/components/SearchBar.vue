<template>
  <div>
    <input @input="onInput"/>
  </div>
</template>
<script>
  export default {
    name: 'SearchBar',
    methods: {
      onInput(event) {
        this.$emit('searchTermChanged', event.target.value);
      }
    }
  };
</script>
<style></style>

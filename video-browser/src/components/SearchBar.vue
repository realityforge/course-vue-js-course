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

<!-- scoped means it only impacts this components html -->
<style scoped>
  input {
    width: 75%;
  }

  div {
    text-align: center;
    margin: 20px;
  }
</style>

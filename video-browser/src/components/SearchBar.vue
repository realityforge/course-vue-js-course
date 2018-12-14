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
        // eslint-disable-next-line
        console.log(event.target.value);
      }
    }
  };
</script>
<style></style>

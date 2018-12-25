<template>
  <div class="dropper">
    <input type="file">
    <span>Drop file here.</span>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'ImageUpload',
    methods: {
      ...mapActions(['uploadImages'])
    }
  };
</script>

<style scoped>
  .dropper {
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .dropper:hover {
    background-color: #eee;
  }

  input {
    width: 100%;
    height: 30vh;
    /*
    the input fills the entire container due to absolute positioning
    and the container is the parent relative
    */
    position: absolute;
    /* invisible! but can still interact with it. */
    opacity: 0;
  }
</style>

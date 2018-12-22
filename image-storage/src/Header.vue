<template>
  <section class="ui secondary pointing menu">
    <a href="" class="active item">Image Storage</a>
    <div class="right menu">
      <a v-if="!authenticated" href="" class="ui item">Login</a>
      <div v-if="authenticated" class="horizontal">
        <a href="" class="item">Galleries</a>
        <a href="" class="item">Upload</a>
        <a href="" class="item">Logout</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return { authenticated: false };
    }
  };
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>

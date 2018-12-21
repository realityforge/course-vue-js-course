<template>
  <section class="header">
    <div class="logo">Image Storage</div>
    <div class="header-controls">
      <a v-if="!authenticated" href="">Login</a>
      <a v-if="authenticated" href="">Gallery</a>
      <a v-if="authenticated" href="">upload</a>
      <a v-if="authenticated" href="">Logout</a>
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
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .logo {
  }
</style>

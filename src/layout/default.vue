<template>
  <header class="default-header">
    <div class="container">
      <h1>Портфель</h1>
    </div>
  </header>

  <main class="default-main">
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "LayoutDefault"
};
</script>

<style lang="scss">
.default-header {
  padding: 20px 0;
}

.default-main {
  padding: 10px 0;
}
</style>

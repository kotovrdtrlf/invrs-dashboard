<template>
  <section class="main-section p-shadow-1">
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.main-section {
  box-sizing: border-box;
  max-width: 1200px;
  height: 600px;
  padding: 20px;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  background: var(--secondary-color);
}

@media only screen and (max-width: 1200px) {
  .main-section {
    margin: 10px;
  }
}

@media only screen and (max-width: 600px) {
  .main-section {
    padding: 10px;
    height: auto;
    min-height: calc(
      100vh - 60px - 20px
    ); /* 100vh - <nav>Height - <main>Padding */
  }
}
</style>
<template>
  <widgetbot
    server="299881420891881473"
    channel="355719584830980096"
    id="embed"
    class="widgetbot-container"
  ></widgetbot>
</template>

<script>
export default {
  data() {
    return {
      widgetbotScript: HTMLScriptElement,
    };
  },
  mounted() {
    // Append widgetbot script to head
    this.widgetbotScript = document.createElement("script");
    this.widgetbotScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"
    );
    document.head.appendChild(this.widgetbotScript);
  },
  beforeUnmount() {
    // Cleanup
    this.widgetbotScript.remove();
  },
};
</script>

<style scoped>
.widgetbot-container {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 600px) {
  .widgetbot-container {
    height: calc(
      100vh - 60px - 20px - 20px
    ); /* 100vh - <nav>Height - <main>Padding - <section class="main-section">Padding */
  }
}
</style>


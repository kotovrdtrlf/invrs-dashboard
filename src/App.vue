<template>
  <Navbar />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
:root {
  --my-primary-color: #17212f;
  --secondary-color: #1f2d40;

  --text-color-white: #f7f7f7;
  --text-color-grey: #a5abb3;

  --accent-color-green: #34cc9c;
  --accent-color-green-transparent: #34cc9c22;
  --accent-color-blue: #1976d2;
}
html,
body * {
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  height: 100vh;

  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;

  background: var(--my-primary-color);

  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  overflow-x: hidden;
}

a:-webkit-any-link {
  color: unset;
  text-decoration: none;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<template></template>

<script>
export default {};
</script>

<style>
:root {
  --primary-color: #17212f;
  --secondary-color: #1f2d40;

  --text-color-white: #e2e4e6;
  --text-color-grey: #b9bfbf;

  --accent-color-green: #34cc9c;
  --accent-color-blue: #1976d2;
}
html,
body {
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

  background: var(--primary-color);

  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  overflow-x: hidden;
}
</style>
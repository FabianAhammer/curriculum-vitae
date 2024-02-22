<script setup lang="ts">

</script>

<template>
  <div class="background">
  </div>
</template>

<style lang="scss">
.background {
  position: absolute;
  width: max(calc(100vw - 400px), 500px);
  z-index: 1;
  background: url("@/../public/background_image.svg");
  height: calc(100vh - 8rem);
}

</style>

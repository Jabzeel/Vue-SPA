<template>
  <div class="bg-front-img">
      <slot />
  </div>
</template>

<style lang="scss">
.bg-front-img {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(@/assets/frontImg.jpg) center;
  background-size: cover;

}
</style>

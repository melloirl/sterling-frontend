<template>
  <div class="responsive-row">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.responsive-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>

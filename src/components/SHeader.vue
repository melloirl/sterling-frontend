<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="row-header">
    <div class="row-header__title">
      <h2>{{ title }}</h2>
    </div>
    <div v-if="subtitle" class="row-header__subtitle">
      <p>{{ subtitle }}</p>
    </div>
  </div>
  <div class="divider"></div>
  <slot></slot>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap");

.row-header {
  font-family: "Cinzel Decorative", cursive;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 31px;
  margin-top: 120px;
}
.row-header__title h2 {
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 49px;
  color: #604977;
}

.row-header__subtitle p {
  font-family: "Cinzel", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
}
.divider {
  // Center the divider
  margin: 0 auto;
  width: 90vw;
  height: 2px;
  background: #7e6598;
  margin-bottom: 31px;
}
</style>

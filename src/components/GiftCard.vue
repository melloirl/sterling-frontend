<template>
  <div class="gift-container">
    <img class="gift-container__image" :src="image" />
    <h3 class="gift-container__title">{{ title }}</h3>
    <p v-if="subtitle" class="gift-container__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  image: {
    type: String,
    required: true,
  },
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

<style scoped>
.gift-container {
  width: 405px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
}

.gift-container__image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 22px;
  cursor: pointer;
}

.gift-container__title {
  color: #332641;
  font-family: Cinzel Decorative;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 22px;
  cursor: pointer;
}

.gift-container__subtitle {
  color: #141414;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
</style>

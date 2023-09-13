<template>
  <div class="category-container">
    <img :src="image" class="category-container__image" />
    <p class="category-container__title">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.category-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
}

.category-container__image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.category-container__title {
  color: #332641;
  font-family: Cinzel;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>

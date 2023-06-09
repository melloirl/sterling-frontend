<template>
  <div v-if="isVisible" class="notification-bar">
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(true);
const message = ref("Frete grátis em compras acima de R$ 250,00");

const closeNotification = () => {
  isVisible.value = false;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap");
.notification-bar {
  background: #604977;
  color: #fff;
  width: 100%;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 1rem;
}

.notification-bar p {
  margin: 0;
  font-family: "Roboto", sans-serif, Arial, Helvetica;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
</style>

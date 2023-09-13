<template>
  <SRow>
    <div class="newsletter-container">
      <h3 class="newsletter__title">Fique por dentro das novidades</h3>
      <span class="newsletter__subtitle"
        >Insira seu e-mail para receber com exclusividade a chegada de novas
        peças</span
      >
      <input
        :placeholder="placeHolder"
        v-model="email"
        type="text"
        class="newsletter__email"
      />
      <div @click="clearEmail" class="newsletter__submit">Enviar</div>
    </div>
  </SRow>
</template>

<script setup lang="ts">
import SRow from "./SRow.vue";
import { ref } from "vue";

const email = ref("");
const placeHolder = ref("Digite seu e-mail");

const clearEmail = () => {
  email.value = "";
  placeHolder.value = "Pronto, agora você receberá nossas novidades!";
};
</script>

<style scoped>
.newsletter-container {
  display: flex;
  flex-direction: column;
}
.newsletter__title {
  width: 422px;
  flex-shrink: 0;
  color: #332641;
  font-family: Cinzel;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
}
.newsletter__subtitle {
  color: #3d3d3d;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 33px;
}

.newsletter__email {
  height: 54px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #7a7a7a;
  background: #f4f4f4;
  padding: 24px;
}
</style>

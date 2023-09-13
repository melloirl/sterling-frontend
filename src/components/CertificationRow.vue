<template>
  <div class="certification-container">
    <h1 class="certification-container__title">Certificações Sterling</h1>
    <SRow class="certification-container__items">
      <div class="certification-container__item">
        <Icon icon="ph:medal" width="100px" height="100px" :color="iconColor" />
        <h3 class="certification-container__item__title">Garantia Digital</h3>
        <p class="certification-container__item__subtitle">
          Suas garantias em um só lugar
        </p>
      </div>
      <div class="certification-container__item">
        <Icon icon="ph:truck" width="100px" height="100px" :color="iconColor" />
        <h3 class="certification-container__item__title">Rápida Entrega</h3>
        <p class="certification-container__item__subtitle">
          Opções variadas de frete para agilizar o processo de entrega
        </p>
      </div>
      <div class="certification-container__item">
        <Icon icon="ph:swap" width="100px" height="100px" :color="iconColor" />
        <h3 class="certification-container__item__title">Troca Fácil</h3>
        <p class="certification-container__item__subtitle">
          Trocas fáceis e sem burocracias
        </p>
      </div>
      <div class="certification-container__item">
        <Icon icon="ph:chats" width="100px" height="100px" :color="iconColor" />
        <h3 class="certification-container__item__title">
          Atendimento Virtual
        </h3>
        <p class="certification-container__item__subtitle">
          Temos atendentes virtuais à sua disposição, sempre que precisar
        </p>
      </div>
    </SRow>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import SRow from "./SRow.vue";
const iconColor = "#7E6598";
</script>

<style scoped>
.certification-container {
  margin: 0 4rem;
  margin-top: 110px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.certification-container__title {
  color: #000;
  font-family: Cinzel Decorative;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}

.certification-container__items {
  border-radius: 6px;
  background: #f4f4f4;
  width: 100%;
  height: 350px;
  justify-content: space-evenly;
}

.certification-container__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 300px;
  margin: 0 1rem;
}
.certification-container__item__title {
  color: #332641;
  font-family: Cinzel;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
  text-align: center;
}
.certification-container__item__subtitle {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 780px) {
  .certification-container__items {
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }

  .certification-container__item__subtitle {
    display: none;
  }
  .certification-container__title {
    font-size: 32px;
  }
}
</style>

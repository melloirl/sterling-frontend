<template>
  <SRow class="gift-row">
    <GiftCard
      title="Para ela"
      image="https://i.imgur.com/D0NT0in.png"
      subtitle="Joias lindas e delicadas para surpreender
com sofisticação."
    ></GiftCard>
    <GiftCard
      title="Para ele"
      image="https://i.imgur.com/la1vRjp.png"
      subtitle="Peças modernas e robustas para presentear
de acordo com o gosto masculino."
    ></GiftCard>
  </SRow>
</template>

<script setup lang="ts">
import SRow from "./SRow.vue";
import GiftCard from "./GiftCard.vue";
</script>

<style scoped>
.gift-row {
  justify-content: space-evenly !important;
  margin: 0 1rem;
  margin-top: 62px;
}
</style>

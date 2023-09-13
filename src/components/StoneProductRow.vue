<script setup lang="ts">
// Import ProductCard component
import ProductCard from "@/components/ProductCard.vue";
import SRow from "./SRow.vue";
</script>

<template>
  <SRow class="product-row">
    <!-- Creates a responsive horizontal row to hold product cards -->
    <ProductCard
      title="Colar de prata com topázio"
      price="79.90"
      image="https://i.imgur.com/4e9NdfD.png"
    />
    <!-- Creates a responsive horizontal row to hold product cards -->
    <ProductCard
      title="Pulseira de prata com topázio"
      price="79.90"
      image="https://i.imgur.com/GQFfXUd.png"
    />
    <!-- Creates a responsive horizontal row to hold product cards -->
    <ProductCard
      title="Anel de prata com diamante"
      price="79.90"
      image="https://i.imgur.com/qRM3NRf.png"
    />
    <!-- Creates a responsive horizontal row to hold product cards -->
    <ProductCard
      title="Pingente de prata com coração"
      price="79.90"
      image="https://i.imgur.com/ocfKuEM.png"
    />
  </SRow>
</template>

<style scoped>
.product-row {
  justify-content: space-evenly !important;
  margin: 0 1rem;
  margin-bottom: 125px;
}
</style>

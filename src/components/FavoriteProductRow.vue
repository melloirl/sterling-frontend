<script setup lang="ts">
// Import ProductCard component
import ProductCard from "@/components/ProductCard.vue";
import SRow from "./SRow.vue";
</script>

<template>
  <SRow class="product-row">
    <!-- Creates a responsive horizontal row to hold product cards -->
    <ProductCard
      title="Colar de prata com coração preto"
      price="79.90"
      image="https://i.imgur.com/sFVLSqX.png"
      tag="Lançamento"
    />
    <!-- Creates a responsive horizontal row to hold product cards -->
    <ProductCard
      title="Par de alianças de prata"
      price="79.90"
      image="https://i.imgur.com/hzyomoN.png"
      tag="Lançamento"
    />
    <!-- Creates a responsive horizontal row to hold product cards -->
    <ProductCard
      title="Colar de pérolas com pingente"
      price="79.90"
      image="https://i.imgur.com/NA1DxhB.png"
      tag="Lançamento"
    />
    <!-- Creates a responsive horizontal row to hold product cards -->
    <ProductCard
      title="Anel de prata com zircônia"
      price="79.90"
      image="https://i.imgur.com/WIbyn1b.png"
      tag="Lançamento"
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

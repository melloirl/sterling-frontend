<script setup lang="ts">
// Import ProductCard component
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <div class="product-column">
    <!-- Creates a responsive horizontal column to hold product cards -->
    <ProductCard
      title="Colar de prata com coração preto"
      price="79.90"
      image="https://i.imgur.com/sFVLSqX.png"
      tag="Lançamento"
    />
    <!-- Creates a responsive horizontal column to hold product cards -->
    <ProductCard
      title="Par de alianças de prata"
      price="79.90"
      image="https://i.imgur.com/hzyomoN.png"
      tag="Lançamento"
    />
    <!-- Creates a responsive horizontal column to hold product cards -->
    <ProductCard
      title="Colar de pérolas com pingente"
      price="79.90"
      image="https://i.imgur.com/NA1DxhB.png"
      tag="Lançamento"
    />
    <!-- Creates a responsive horizontal column to hold product cards -->
    <ProductCard
      title="Anel de prata com zircônia"
      price="79.90"
      image="https://i.imgur.com/WIbyn1b.png"
      tag="Lançamento"
    />
  </div>
</template>

<style scoped>
.product-column {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 1rem;
  margin-bottom: 125px;
}
</style>

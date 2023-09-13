<script setup lang="ts">
import { ref } from "vue";

// eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: false,
    default: "",
  },
});

const formatCurrency = (value: string) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(Number(value));
};

const payByInstallements = (value: string, installements: number) => {
  // Divide the price by the number of installements
  const installementPrice = Number(value) / installements;
  return formatCurrency(installementPrice.toFixed(2));
};

const isHovered = ref(false);
</script>

<template>
  <!-- Defines a squared div to showcase mocked products -->
  <div class="product-card">
    <!-- Defines a squared div to showcase mocked products -->
    <div
      :class="`product-card__image ${isHovered ? 'hover' : ''}`"
      :style="{ backgroundImage: `url(${image})` }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- If there is a tag prop, add a label with the tag value -->
      <div v-if="tag" class="product-card__tag">
        <p>{{ tag }}</p>
      </div>
    </div>
    <!-- Defines a squared div to showcase mocked products -->
    <div class="product-card__info">
      <!-- Defines a squared div to showcase mocked products -->
      <div :class="`product-card__info__title ${isHovered ? 'hover' : ''}`">
        <h3>{{ title }}</h3>
      </div>
      <!-- Defines a squared div to showcase mocked products -->
      <div class="product-card__info__price">
        <p>{{ formatCurrency(price) }}</p>
      </div>
      <div class="product-card__offer_price">
        <p>{{ `ou 3x de ${payByInstallements(price, 3)} sem juros` }}</p>
      </div>
    </div>
    <!-- Buy button  -->
    <div class="product-card__buy">
      <p>Comprar</p>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  width: 280px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-family: "Roboto", sans-serif, Arial, Helvetica;
}
.product-card__image {
  width: 260px;
  height: 260px;
  overflow: hidden;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.product-card__image.hover {
  border: solid #604977 1px;
}
.product-card__info__title.hover h3 {
  color: #604977;
}
.product-card__info h3 {
  width: 100%;
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 13px;
  margin-bottom: 16px;
}
.product-card__info__price p {
  width: 100%;
  color: #332641;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 13px;
  text-align: end;
}
.product-card__offer_price p {
  color: #292929;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: end;
  margin-bottom: 17px;
}
.product-card__buy {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #332641;
}
.product-card__buy p {
  color: #f1e3ff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}
.product-card__tag {
  width: 117px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #f6edff;
  margin-bottom: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-card__tag p {
  color: #332641;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}
</style>

<template>
  <div class="home">
    <NavigationBar />
    <NewsCarousel />
    <ColumnHeader title="Mais vendidos" subtitle="os favoritos" />
    <ProductColumn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import NewsCarousel from "@/components/NewsCarousel.vue";
import ColumnHeader from "@/components/ColumnHeader.vue";
import ProductColumn from "@/components/ProductColumn.vue";

import useTitleMixin from "@/mixins/titleMixin";

export default defineComponent({
  setup() {
    useTitleMixin("Home");
  },
  title: "Home",
  name: "HomeView",
  components: {
    NavigationBar,
    NewsCarousel,
    ColumnHeader,
    ProductColumn,
  },
});
</script>

<style scoped>
.home {
  overflow-x: hidden;
}
</style>

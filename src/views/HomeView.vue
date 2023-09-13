<template>
  <div class="home">
    <NavigationBar />
    <NewsCarousel />
    <ColumnHeader title="Mais vendidos" subtitle="os favoritos" />
    <ProductColumn />
    <ColumnHeader title="Categorias" subtitle="escolha por categorias" />
    <SRow
      ><CategoryIcon
        image="https://i.imgur.com/45EEuCw.png"
        title="Colares"
      ></CategoryIcon
      ><CategoryIcon
        image="https://i.imgur.com/sJMWInX.png"
        title="Anéis e alianças"
      ></CategoryIcon
      ><CategoryIcon
        image="https://i.imgur.com/KfZMhX0.png"
        title="Brincos"
      ></CategoryIcon
      ><CategoryIcon
        image="https://i.imgur.com/43BMMPP.png"
        title="Pingentes"
      ></CategoryIcon
      ><CategoryIcon
        image="https://i.imgur.com/PevNZFW.png"
        title="Correntes"
      ></CategoryIcon
    ></SRow>
    <ColumnHeader title="Presentes" subtitle="escolha por categorias" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import NewsCarousel from "@/components/NewsCarousel.vue";
import ColumnHeader from "@/components/ColumnHeader.vue";
import ProductColumn from "@/components/ProductColumn.vue";
import SRow from "@/components/SRow.vue";
import CategoryIcon from "@/components/CategoryIcon.vue";

import usePageTitle from "@/composables/pageTitle";

export default defineComponent({
  setup() {
    usePageTitle("Home");
  },
  title: "Home",
  name: "HomeView",
  components: {
    NavigationBar,
    NewsCarousel,
    ColumnHeader,
    ProductColumn,
    SRow,
    CategoryIcon,
  },
});
</script>

<style scoped>
.home {
  overflow-x: hidden;
}
</style>

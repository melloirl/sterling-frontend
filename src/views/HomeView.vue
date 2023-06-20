<template>
  <div class="home">
    <NavigationBar />
    <NewsCarousel />
    <ColumnHeader title="Mais vendidos" subtitle="os favoritos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import NewsCarousel from "@/components/NewsCarousel.vue";
import ColumnHeader from "@/components/ColumnHeader.vue";

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
  },
});
</script>

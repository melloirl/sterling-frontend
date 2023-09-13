<template>
  <div class="home">
    <NavigationBar />
    <NewsCarousel />
    <SHeader title="Mais vendidos" subtitle="os favoritos" />
    <FavoriteProductRow />
    <SHeader title="Categorias" subtitle="escolha por categorias" />
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
    <SHeader title="Presentes" subtitle="escolha por categorias" />
    <GiftRow />
    <SHeader
      title="Coleção de Pedrarias"
      subtitle="Peças de prata com semijoias"
    />
    <StoneProductRow />
    <CertificationRow />
    <SignNewsletter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import NewsCarousel from "@/components/NewsCarousel.vue";
import SHeader from "@/components/SHeader.vue";
import FavoriteProductRow from "@/components/FavoriteProductRow.vue";
import SRow from "@/components/SRow.vue";
import CategoryIcon from "@/components/CategoryIcon.vue";
import StoneProductRow from "@/components/StoneProductRow.vue";
import GiftRow from "@/components/GiftRow.vue";
import CertificationRow from "@/components/CertificationRow.vue";
import SignNewsletter from "@/components/SignNewsletter.vue";

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
    SHeader,
    FavoriteProductRow,
    SRow,
    CategoryIcon,
    StoneProductRow,
    GiftRow,
    CertificationRow,
    SignNewsletter,
  },
});
</script>

<style scoped>
.home {
  overflow-x: hidden;
}
</style>

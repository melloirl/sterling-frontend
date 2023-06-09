<template>
  <div class="home">
    <NavigationBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

import useTitleMixin from "@/mixins/titleMixin";

export default defineComponent({
  setup() {
    useTitleMixin("Home");
  },
  title: "Home",
  name: "HomeView",
  components: {
    NavigationBar,
  },
});
</script>

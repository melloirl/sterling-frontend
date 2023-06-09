import { onBeforeMount } from "vue";

export default function useTitleMixin(title: string | (() => string)) {
  onBeforeMount(() => {
    const computedTitle = typeof title === "function" ? title() : title;
    document.title = `Sterling Pratas - ${computedTitle}`;
  });
}

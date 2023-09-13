import { onBeforeMount } from "vue";

export default function usePageTitle(title: string | (() => string)) {
  onBeforeMount(() => {
    const computedTitle = typeof title === "function" ? title() : title;
    document.title = `Sterling Pratas - ${computedTitle}`;
  });
}

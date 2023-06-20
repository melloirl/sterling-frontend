<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { Icon } from "@iconify/vue";

// Define an interface for the news items containing a link and an image
interface NewsItem {
  link: string;
  image: string;
}
// Define the initial index of the news item
const index = ref(0);
const isHovered = ref(false);
const isChanging = ref(false);
const previousImage = ref("");
const controls = ref({
  left: 0,
  right: 0,
});

// Define an array of news 3 news items
const newsItems: NewsItem[] = [
  {
    link: "https://www.google.com",
    image:
      "https://www.dcnewsnow.com/wp-content/uploads/sites/14/2022/10/000_best-beauty-and-the-beast-jewelry-b02b8d.jpg?w=1280",
  },
  {
    link: "https://www.google.com",
    image:
      "https://okl.scene7.com/is/image/OKL/SalesEvent_84433_Lifestyle_3?wid=1000&op_sharpen=1",
  },
  {
    link: "https://www.google.com",
    image:
      "https://img.freepik.com/premium-photo/collection-vintage-jewelry-antique-wooden-jewelry-box_218381-7248.jpg",
  },
];

// Load images on mount to reduce wait time when the carousel is in view
onMounted(() => {
  // Loop through the news items
  newsItems.forEach((item) => {
    // Create a new image
    const img = new Image();
    // Set the source of the image to the news item image
    img.src = item.image;
  });
});

// Define a function to handle the click event on the news item
const handleClick = (link: string) => {
  // Change the window location to the link
  window.location.href = link;
};
// Define a function to handle index changes
const handleIndexChange = (increment: number) => {
  console.log("index.value", index.value);
  // Increment the index by the increment value
  // If the index is greater than the length of the news items array, set the index to 0
  // If the index is less than 0, set the index to the length of the news items array minus 1
  // Otherwise, set the index to the index plus the increment value
  index.value =
    index.value + increment > newsItems.length - 1
      ? 0
      : index.value + increment < 0
      ? newsItems.length - 1
      : index.value + increment;
};

// Watch the news items image for changes
watch(index, (newValue, oldValue) => {
  // Set the previous image to the old value
  previousImage.value = newsItems[oldValue].image;
  // Set the isChanging value to true
  isChanging.value = true;
  // Set a timeout to set the isChanging value to false after 500ms
  setTimeout(() => {
    isChanging.value = false;
  }, 500);
});
</script>

<template>
  <!-- Create a carousel div with the background from the news object  -->
  <div class="carousel">
    <div
      class="carousel-background hover-target"
      :style="{ backgroundImage: `url(${newsItems[index].image})` }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      @click="handleClick(newsItems[index].link)"
    ></div>
    <!-- Create a div to hold the carousel controls -->

    <!-- Create an iconify chevron to handle the previous index -->
    <div
      class="carousel-control hover-target"
      @click="handleIndexChange(-1)"
      :style="`background-color: rgba(255, 255, 255, ${controls.left})`"
      @mouseenter="controls.left = 0.3"
      @mouseleave="controls.left = 0"
    >
      <Icon
        icon="ph:caret-left-bold"
        width="3.75rem"
        height="3.75rem"
        color="fff"
      />
    </div>
    <!-- Create a button to handle the next index -->
    <div
      class="carousel-control hover-target"
      @click="handleIndexChange(+1)"
      :style="`background-color: rgba(255, 255, 255, ${controls.right})`"
      @mouseenter="controls.right = 0.3"
      @mouseleave="controls.right = 0"
    >
      <Icon
        icon="ph:caret-right-bold"
        width="3.75rem"
        height="3.75rem"
        color="fff"
      />
    </div>

    <!-- Create a div to hold the carousel content -->
  </div>
</template>

<style scoped lang="scss">
.carousel {
  width: 100vw;
  height: 360px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;
  margin-top: 13px;
}

.carousel-background {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 1.5s ease-in-out;
}

.hover-target:hover {
  transform: scale(1.1);
}
.carousel-control {
  z-index: 1;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
}
</style>

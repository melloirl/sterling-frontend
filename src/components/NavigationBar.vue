<template>
  <NotificationBar></NotificationBar>
  <div class="navigation-container">
    <div class="account-nav">
      <img src="../assets/logo.png" alt="logo" />
      <nav aria-label="User options" class="user">
        <Icon
          icon="ph:heart-bold"
          width="2rem"
          height="2rem"
          :color="iconColor"
          style="cursor: pointer"
        />
        <Icon
          icon="ph:magnifying-glass-bold"
          width="2rem"
          height="2rem"
          :color="iconColor"
          style="cursor: pointer"
        />
        <Icon
          icon="ph:basket-bold"
          width="2rem"
          height="2rem"
          :color="iconColor"
          style="cursor: pointer"
        />
      </nav>
      <div class="login">
        <Icon
          icon="ph:user-bold"
          width="2rem"
          height="2rem"
          :color="iconColor"
          style="cursor: pointer"
        />
        <p>Entre ou cadastre-se</p>
      </div>
    </div>
    <nav aria-label="Product" class="product">
      <a
        v-for="option in navigationOptions"
        :key="option.name"
        :href="option.route"
        >{{ option.name }}</a
      >
    </nav>
  </div>
</template>

<script setup lang="ts">
import NotificationBar from "./NotificationBar.vue";
import { Icon } from "@iconify/vue";

const navigationOptions = [
  { name: "Brincos", route: "/" },
  { name: "Anéis", route: "/" },
  { name: "Correntes", route: "/" },
  { name: "Alianças", route: "/" },
  { name: "Pingentes", route: "/" },
  { name: "Coleções", route: "/" },
];

const iconColor = "#7e6598";
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@100;700&display=swap");

.account-nav {
  display: flex;
  align-items: center;
  margin: 2rem 0;
}

.account-nav::before {
  content: "";
  flex: 1;
}
.account-nav img {
  position: absolute;
  left: 43vw;
  top: 70px;
}
.product {
  display: flex;
  justify-content: space-evenly;
  overflow-x: auto;
}

.product a {
  font-family: "Cinzel Decorative", cursive;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.5rem;
  color: #000;
  flex-shrink: 0;
}

.user {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: #7e6598;
}

.user .iconify {
  margin: 0.75rem 1rem;
}

.login {
  margin-left: 16px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  width: 162px;
  background-color: #f6edff;
  border-radius: 6px;
}

.login p {
  font-family: "Roboto", sans-serif, Arial, Helvetica;
  margin-left: 16px;
  width: 79px;
  height: 36px;
  font-size: 15px;
  line-height: 18px;
}
.navigation-container {
  padding: 0 4rem;
}

@media (max-width: 768px) {
  .account-nav {
    flex-direction: column;
  }
  .account-nav img {
    position: relative;
    left: auto;
  }
  .user {
    justify-content: center;
    margin-top: 1rem;
    visibility: hidden;
  }

  .product {
    justify-content: flex-start;
  }

  .product a {
    margin-right: 0.5rem;
  }

  .login {
    margin: 1rem auto;
    width: auto;
    visibility: hidden;
  }
  .navigation-container {
    padding: 0 0.5rem;
  }
}
</style>

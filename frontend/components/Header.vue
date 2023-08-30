<template lang="">
  <header class="header">
    <img src="../static/burger.svg" alt="menu" class="header__burger" />
    <div @click="menuHandler" class="container"></div>
    <MenuDrop :visibilityOfMenu="isMenuVisible" @newVisibility="setNewVisibility"/>
  </header>
</template>
<script>
import MenuDrop from "./MenuDrop";
export default {
  components: {
    MenuDrop,
  },

  data() {
    return {
      isMenuVisible: false,
    };
  },

  methods: {
    menuHandler() {
      this.isMenuVisible = !this.isMenuVisible;

      const bodyOfSite = document.querySelector("body");
      const burgerIcon = document.querySelector(".header__burger");
      const burgerContainer = document.querySelector(".container");

      bodyOfSite.style.overflow = "hidden";
      burgerIcon.style.display = "none";
      burgerContainer.style.display = "none";
    },

    setNewVisibility(data) {
      this.isMenuVisible = data;
    }
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100vw;
  max-width: 1600px;
  position: -webkit-sticky;
  /* Safari */
  position: sticky;
  top: 0;
  background: transparent;
}

.header__burger {
  height: 50%;
  margin: auto 20px auto auto;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
}

.container {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: 25px;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
}
</style>

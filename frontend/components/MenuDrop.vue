<template lang="">
  <div v-if="visibilityOfMenu" class="wrapOfMenu">
    <div class="menu">
      <div class="menu-close" @click="visibilityHandler"></div>
      <ul class="menu-list">
        <nuxt-link
          :to="{
            path: '/',
            hash: '#home',
          }"
          class="menu-list__link"
          @click.native="visibilityHandler"
          ><li class="menu-list__item">Home</li></nuxt-link
        >
        <nuxt-link
          :to="{ path: '/', hash: '#services' }"
          class="menu-list__link"
          @click.native="visibilityHandler"
          ><li class="menu-list__item">Services</li></nuxt-link
        >
        <nuxt-link
          :to="{ path: '/', hash: '#about' }"
          class="menu-list__link"
          @click.native="visibilityHandler"
          ><li class="menu-list__item">About</li></nuxt-link
        >
        <nuxt-link
          :to="{
            path: '/articles',
            hash: '',
          }"
          class="menu-list__link"
          @click.native="visibilityHandler"
          ><li class="menu-list__item">News</li></nuxt-link
        >
        <nuxt-link
          :to="{
            path: '/policies',
            hash: '',
          }"
          class="menu-list__link"
          @click.native="visibilityHandler"
          ><li class="menu-list__item">Our Policy</li></nuxt-link
        >
      </ul>
      <BtnBookNow />
      <div class="menu-insta">
        <img
          src="../static/instaIcon.svg"
          alt="instagram"
          class="menu-insta__item"
        /><a
          href="https://www.instagram.com/beauty_studio_by_hannah/"
          class="menu-insta__item__link"
          >Beauty studio by Hanna</a
        >
      </div>
      <div class="menu-address">
        <img src="../static/pin.svg" alt="address" class="menu-insta__item" /><a
          href="https://goo.gl/maps/ZwdqhcZ2bzpv4Ync9"
          class="menu-address__item__link"
          >1501 N Highway 17, Unit J,<br />
          Suite 106, Mount Pleasant
        </a>
      </div>
      <div class="menu-phone">
        <img
          src="../static/phoneIcon.svg"
          alt="phone"
          class="menu-phone__item"
        />
        <a href="tel:+18434995444" class="menu-phone__item__link"
          >+1 (843) 499-5444</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import BtnBookNow from "./btns/BtnBookNow.vue";

export default {
  components: {
    BtnBookNow,
  },

  props: {
    visibilityOfMenu: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    visibilityHandler() {
      const bodyOfSite = document.querySelector("body");
      const burgerIcon = document.querySelector(".header__burger");
      const burgerContainer = document.querySelector(".container");

      bodyOfSite.style.overflowY = "auto";
      bodyOfSite.style.overflowX = "hidden";
      burgerIcon.style.display = "block";
      burgerContainer.style.display = "block";

      this.$emit("newVisibility", !this.visibilityOfMenu);
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/styles.scss";

.wrapOfMenu {
  position: relative;
  left: 0px;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: $bg_wrapper_of_menu;

  .menu {
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;
    background-color: $bg_of_menu;
    padding-left: 25px;

    &-close {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 20px;
      top: 20px;
      --weight: 1.5px;
      --aa: 1px; /* anti-aliasing */
      --color: white;
      border-radius: 3px;
      background: linear-gradient(
          45deg,
          transparent calc(50% - var(--weight) - var(--aa)),
          var(--color) calc(50% - var(--weight)),
          var(--color) calc(50% + var(--weight)),
          transparent calc(50% + var(--weight) + var(--aa))
        ),
        linear-gradient(
          -45deg,
          transparent calc(50% - var(--weight) - var(--aa)),
          var(--color) calc(50% - var(--weight)),
          var(--color) calc(50% + var(--weight)),
          transparent calc(50% + var(--weight) + var(--aa))
        );

      &:hover {
        cursor: pointer;
      }
    }

    &-list {
      margin: 60px 0 32px;
      list-style-type: none;
      padding-left: 0;

      &__item {
        color: $color_text_of_menu;
        font-size: 32px;
        line-height: 34px;
        margin-bottom: 16px;

        &:hover {
          color: $color_text_of_menu_hover;
          font-size: 34px;
        }
      }

      &__link {
        text-decoration: none;

        &:hover {
          color: $color_text_of_menu_hover;
        }
      }
    }

    &-insta,
    &-address,
    &-phone {
      margin-top: 24px;
      display: flex;
      align-items: center;

      &__item {
        width: 24px;

        &__link {
          text-decoration: none;
          color: $color_text_of_menu;
          line-height: auto;
          margin-left: 8px;

          &:hover {
            color: $color_text_of_menu_hover;
          }
        }
      }
    }
  }
}
</style>

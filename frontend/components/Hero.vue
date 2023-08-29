<template>
  <section class="hero" id="home">
    <div class="hero__content">
      <img src="../static/logo.svg" alt="logo" class="hero__logo" />
      <img src="../static/hero.jpg" :alt="imageAlt" class="hero-image" />
    </div>
    <BtnBookNow class="book-now" />
  </section>
</template>

<script>
import BtnBookNow from "./btns/BtnBookNow.vue";

export default {
  components: {
    BtnBookNow,
  },
  props: {
    imageAlt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.hero {
  // position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-height: 1000px;
  margin: 0;
  margin-top: -100px;

  .hero-image {
    width: 100vw;
    max-width: 1600px;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    display: flex;
    height: 100%;

    @media (min-width: 1600px) {
      max-width: 1600px;
      justify-content: center;
      margin-left: -150px;
    }

    .hero__logo {
      position: absolute;
      top: 20px;
      left: 0;
      width: 300px;
      height: 150px;
      object-fit: cover;
      filter: contrast(200%) !important;

      @media (min-width: 1600px) {
        position: relative;
        top: -60px;
        left: 330px;
        height: 300px;
      }
    }

    &__text {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__image {
      width: 50%;
      display: flex;
      flex-shrink: 1;
    }
  }

  .book-now {
    position: absolute;
    bottom: 350px;
    left: 40px;
    box-shadow: -10px 12px 5px #94a19d;

    @media (min-width: 1600px) {
      position: relative;
      bottom: -370px;
      left: -1400px;
    }
  }

  @media (max-width: 800px) {
    height: 350px;

    .book-now {
      top: 270px;
      bottom: auto;
    }

    &__logo {
      width: 200px;
      height: 100px;
    }
  }
}
</style>

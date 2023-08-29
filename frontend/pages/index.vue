<template>
  <main>
    <h1 class="homepage__title">Beauty studio by Hanna</h1>
    <Header />
    <Hero :image-alt="alt" />
    <About />
    <Values />
    <TreatmentMenu />
    <Reviews :carousel_data="reviews" />
    <Slider :carousel_data="sliderItems" :interval="2000" />
    <Footer />
  </main>
</template>

<script>
import Reviews from "../components/reviews/Reviews";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Values from "../components/Values";
import About from "../components/About";
import Hero from "~/components/Hero";
import TreatmentMenu from "~/components/treatment/TreatmentMenu.vue";

export default {
  name: "IndexPage",
  components: {
    Reviews,
    Slider,
    Footer,
    Values,
    About,
    Hero,
    TreatmentMenu,
  },

  head() {
    return {
      title: "Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Тут будет описание для СЕО",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    };
  },

  data() {
    return {
      alt: "Hero pic",
      sliderItems: [],
      reviews: [],
    };
  },

  mounted() {
    this.$axios("/api/reviews").then((response) => {
      this.reviews = response.data.data;
    });
    this.$axios("/api/sliderpics/?populate=*").then((response) => {
      this.sliderItems = response.data.data;
    });

    const bodyOfSite = document.querySelector("body");

    bodyOfSite.style.overflowX = "hidden";
    bodyOfSite.style.overflowY = "auto";
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui;
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  max-width: 1200px;
  overflow-x: hidden;
  margin-left: auto;
  margin-right: auto;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 1600px;

  &:nth-child(n) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .homepage__title {
    display: none;
  }
}
</style>

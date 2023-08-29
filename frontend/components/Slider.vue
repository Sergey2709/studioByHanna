<template lang="">
  <section class="wrapper-slider">
    <div
      class="gallery"
      :style="{ 'margin-left': margin_left, transition: transition }"
    >
      <GalleryItem
        v-for="item in carousel_data"
        :key="item.id"
        :category="category"
        :item_data="item"
        :src="item.attributes.picture.data.attributes.url"
      />
    </div>
  </section>
</template>

<script>
import GalleryItem from "./gallery/GalleryItem";
import BtnLeft from "./btns/BtnLeft";
import BtnRight from "./btns/BtnRight";
export default {
  components: {
    GalleryItem,
    BtnLeft,
    BtnRight,
  },

  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      margin_left: "0",
      transition: "",
      category: "Slider",
      sliderItemsArr: [],
    };
  },

  methods: {
    cutArr() {
      this.carousel_data.push(this.carousel_data.shift());
      this.margin_left = "0";
      this.transition = "all ease 0s";
    },

    nextSlide() {
      this.margin_left = "-200px";
      this.transition = "all ease 0.5s";
      setTimeout(this.cutArr, 500);
    },
  },

  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide();
      }, vm.interval);
    }
  },
};
</script>

<style lang="scss">
.wrapper-slider {
  max-width: 100vw;
  overflow: hidden;
  margin-top: 100px;

  .gallery {
    height: 300px;
    display: flex;

    .gallery__item__pic {
      width: auto;
      height: 300px;
      object-fit: cover;
    }
  }

  @media (min-width: 1600px) {
    max-width: 1600px;
  }
}
</style>

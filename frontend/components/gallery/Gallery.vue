<template lang="">
  <section class="wrapper">
    <div
      class="gallery"
      :style="{ 'margin-left': margin_left, transition: transition }"
    >
      <GalleryItem
        v-for="item in carousel_data"
        :key="item.id"
        :item_data="item"
        :category="category"
        :src="item.attributes.picture.data.attributes.url"
      />
    </div>
  </section>
</template>
<script>
import GalleryItem from "./GalleryItem";
import BtnLeft from "../btns/BtnLeft";
import BtnRight from "../btns/BtnRight";
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
      category: "Gallery",
      margin_left: "0",
      transition: "",
    };
  },

  methods: {
    cutArr() {
      this.carousel_data.push(this.carousel_data.shift());
      this.margin_left = "0";
      this.transition = "all ease 0s";
    },

    nextSlide() {
      if (window.innerWidth > 1030) {
        this.margin_left = "-500px";
        this.transition = "all ease 1s";
        setTimeout(this.cutArr, 1000);
      } else {
        this.margin_left = "-300px";
        this.transition = "all ease 1s";
        setTimeout(this.cutArr, 1000);
      }
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
.wrapper {
  width: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: auto;

  .gallery {
    display: flex;
    transition: all ease 0.5s;

    .gallery__item__pic {
      width: 500px;
      height: 500px;
      object-fit: cover;
    }
  }

  @media (max-width: 1030px) {
    width: 100vw;
    overflow: hidden;
    margin-left: -20px;

    .gallery {
      .gallery__item__pic {
        width: 300px;
        height: 300px;
        object-fit: cover;
      }
    }
  }
}
</style>

<template lang="">
  <section class="reviews">
    <div class="reviews-title__wrapper">
      <hr />
      <h3 class="main-title">Reviews</h3>
      <hr />
    </div>
    <div class="reviews-wrapper">
      <ReviewsItem
        v-for="(item, index) in carousel_data"
        :key="item.id"
        :item_id="item.id"
        :item_data="item.attributes"
        :item_index="index"
      />
    </div>
    <div class="buttons">
      <button class="arrow" @click="prevSlide">
        <BtnLeft />
      </button>
      <button class="arrow right" @click="nextSlide">
        <BtnRight />
      </button>
    </div>
  </section>
</template>
<script>
import ReviewsItem from "./ReviewsItem.vue";
import BtnLeft from "../btns/BtnLeft.vue";
import BtnRight from "../btns/BtnRight.vue";

export default {
  components: {
    ReviewsItem,
    BtnLeft,
    BtnRight,
  },
  mounted() {
    this.collection = document.querySelector(".reviews-wrapper");
  },

  data() {
    return {
      currentSlideIndex: 0,
      collection: [],
    };
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.setActive(this.currentSlideIndex);
      } else {
        this.currentSlideIndex = this.carousel_data.length - 1;
        this.setActive(this.currentSlideIndex);
      }
    },

    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0;
        this.setActive(this.currentSlideIndex);
      } else {
        this.currentSlideIndex++;
        this.setActive(this.currentSlideIndex);
      }
    },

    setActive(data) {
      [...this.collection.children].map((el, i) => {
        if (i === data) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    },
  },
};
</script>
<style lang="scss">
.reviews {
  width: 100vw;
  overflow: hidden;
  background: #7d9c9c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 70px 30px 30px 30px;
  color: #fff8dc;

  &-title__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-bottom: 50px;

    hr {
      width: 40%;
      height: 1px;
    }

    .main-title {
      font-size: xx-large;
    }

    @media (max-width: 740px) {
      hr {
        width: 25%;
      }

      .main-title {
        font-size: x-large;
      }
    }
  }

  &-wrapper {
    display: flex;
    transition: all ease 0.5s;
    margin: 0 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .buttons {
    display: flex;

    .arrow {
      color: #337ab7;
      cursor: pointer;
      text-decoration: none;
      background: transparent;
      border: none;
      display: inline-block;
      margin: 20px;
      transform: rotate(180deg);
      display: flex;

      .arrow-3-icon {
        position: relative;
        top: 0;
        transition: transform 0.3s ease;
        vertical-align: middle;
      }

      .arrow-3-iconcircle {
        transition: stroke-dashoffset 0.3s ease;
        stroke-dasharray: 95;
        stroke-dashoffset: 95;
      }

      &:hover .arrow-3-icon {
        transform: translate3d(5px, 0, 0);
      }
      &:hover .arrow-3-iconcircle {
        stroke-dashoffset: 0;
      }
    }
    .right {
      transform: rotate(0);
    }
  }

  @media (min-width: 1600px) {
    max-width: 1600px;
  }
}
</style>

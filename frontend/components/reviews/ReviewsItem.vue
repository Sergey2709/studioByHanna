<template lang="">
  <article class="review__item">
    <p class="review__item__text">{{ item_data.content }}</p>
    <p class="review__item__author">{{ item_data.author }}</p>
  </article>
</template>
<script>
export default {
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
    item_id: {
      type: Number,
      default: 0,
    },
    item_index: {
      type: Number,
      default: 0,
    },
  },

  mounted() {
    let element = document.querySelector(".review__item");

    if (this.item_index === 0) {
      element.classList.add("active");
    }
  },
};
</script>
<style lang="scss">
.review__item {
  display: none;
  width: 100%;

  p {
    display: flex;
    align-self: center;
    width: 70%;
    align-items: center;
  }

  &__text {
    justify-content: center;
    font-size: 24px;
    text-align: center;
  }

  &__author {
    justify-content: end;
    font-size: 22px;
    height: 25%;
    margin-top: 30px;
  }

  @media (max-width: 1030px) {
    p {
      width: 85%;
    }

    &__text {
      font-size: 18px;
    }

    &__author {
      font-size: 16px;
    }
  }

  @media (max-width: 500px) {
    &__text {
      font-size: 14px;
    }
  }
}
.active {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

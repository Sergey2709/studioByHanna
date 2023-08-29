<template lang="">
  <div class="gallery__item">
    <img class="gallery__item__pic" :src="api + this.src" alt="pic" />
  </div>
</template>

<script>
import API from "~/apies/backend";

export default {
  components: {
    API,
  },

  data() {
    return {
      sliderItem: "",
      api: "",
    };
  },

  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
    category: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
  },

  mounted() {
    this.api = API;
  },
};
</script>

<style lang="scss"></style>

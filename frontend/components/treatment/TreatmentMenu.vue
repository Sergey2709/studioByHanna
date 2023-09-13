<template lang="">
  <section class="treatment" id="services">
    <aside>
      <h3 class="treatment__title">Services</h3>
      <ul class="treatment__menu">
        <li
          v-for="item in treatments"
          :key="item.id"
          class="treatment__menu__item"
        >
          <nuxt-link
            :to="{
              // path: `/treatment`,
              path: `/treatment/${item.attributes.Slug}`,
              // query: {
              //   title: item.attributes.title,
              //   treatmentIds: item.attributes.treatments.data.map(
              //     (el) => el.id
              //   ),
              // },
            }"
            :slug="item.attributes.Slug"
            >{{ item.attributes.title }}
          </nuxt-link>
        </li>
      </ul>
    </aside>
    <div class="gallery-container">
      <Gallery :carousel_data="galleryItems" :interval="5000" />
    </div>
  </section>
</template>
<script>
import Gallery from "../gallery/Gallery";

export default {
  components: {
    Gallery,
  },

  data() {
    return {
      galleryItems: [],
      treatments: [],
      ids: [],
      slug: "",
    };
  },

  mounted() {
    this.$axios(`/api/gallerypics/?populate=*`).then((response) => {
      this.galleryItems = response.data.data;
    });
    this.$axios("/api/categories-of-treatments?populate=*").then((response) => {
      this.treatments = response.data.data;
    });
  },
};
</script>


<style lang="scss">
@import "~/assets/scss/styles.scss";

.treatment {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding: 50px;
  color: $color_of_text;

  &__title {
    margin-bottom: 50px;
  }

  aside,
  .gallery-container {
    width: 50%;
    height: fit-content;
  }

  .gallery-container {
    padding-top: 80px;
  }

  aside {
    padding: 30px;
  }

  .gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  &__title {
    display: flex;
    align-items: center;
    font-size: 40px;
    height: 20%;
  }

  &__menu {
    height: 80%;

    &__item {
      margin: 30px 0;
      list-style-type: none;
      font-size: large;

      a {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        font-size: 22px;
        color: $color_of_text;

        @media (max-width: 670px) {
          font-size: 18px;
        }

        &:hover {
          color: $color_of_text_hover;
          transform: translateY(-2px);
        }
      }

      img {
        height: 50px;
      }
    }
  }

  @media (max-width: 1030px) {
    flex-direction: column;
    align-items: center;

    aside,
    .gallery-container {
      width: 100vw;
      height: fit-content;
      padding-bottom: 0;
      padding: 20px;

      .treatment__title {
        justify-content: center;
        font-size: 32px;
        margin-bottom: 30px;
      }

      .treatment__menu {
        &__item {
          margin: 16px 0;
        }
      }
    }
  }

  @media (min-width: 1600px) {
    max-width: 1600px;
    padding-right: 0;
  }
}
</style>

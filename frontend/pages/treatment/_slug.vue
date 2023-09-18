<template>
  <main>
    <Header />
    <div class="treatment-page">
      <!-- <p>{{ pageData }}</p> -->
      <h1 class="treatment-page__title">
        {{ pageData.data.data.attributes.title }}
      </h1>
      <article
        v-for="item in pageData.data.data.attributes.treatments.data"
        :key="item.id"
        class="treatment-page__article"
      >
        <div class="treatment-page__article__column">
          <div class="treatment-page__article__title">
            <h3>{{ item.attributes.title }} &nbsp</h3>
            <h3>{{ item.attributes.price }} &nbsp</h3>
            <h3 v-if="item.unit">{{ item.attributes.unit }}</h3>
          </div>

          <p
            v-html="item.attributes.description"
            class="treatment-page__article__description"
            style="text-align: left; margin-bottom: 60px"
          ></p>
          <BtnBookNow />
        </div>
        <img
          class="treatment-page__article__picture"
          :src="api + item.attributes.picture.data[0].attributes.url"
          alt="treatment-pic"
        />
      </article>
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer.vue";
import BtnBookNow from "~/components/btns/BtnBookNow.vue";
import API from "~/apies/backend";

export default {
  components: {
    Header,
    Footer,
    BtnBookNow,
    API,
  },

  data() {
    return {
      api: "",
    };
  },

  head() {
    return {
      title: this.title,
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

  async asyncData({ route, error, $axios }) {
    let pageData = {};
    try {
      pageData = await $axios(
        `/api/categories-of-treatments/${route.params.slug}?populate=treatments.picture
`
      );
    } catch (e) {
      error({ statusCode: 404, message: "Post not found" });
    }

    console.log(pageData);
    return { pageData };
  },

  mounted() {
    this.api = API;
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles.scss";

.treatment-page {
  font-family: system-ui;
  width: 100vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  color: $color_of_text;

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -75px;
    margin-bottom: 100px;
  }

  &__article {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    width: 1000px;
    align-self: center;

    &__column {
      margin-right: 60px;
    }

    &__title {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;

      h3 {
        margin: 5px 0;
      }
    }

    &__description {
      margin-top: 40px;
      margin-bottom: 40px;

      blockquote ul {
        margin-left: 16px !important;
      }
    }

    &__picture {
      width: 333px;
      height: 500px;
      object-fit: cover;
      align-self: center;
    }
  }

  @media (max-width: 1100px) {
    &__title {
      font-size: 20px;
      padding: 0 70px;
      text-align: center;
    }

    &__article {
      justify-content: center;
      flex-direction: column;
      width: auto;
      align-items: center;

      &__column {
        margin-right: 20px;
        width: 70%;
      }

      &__title {
        font-size: 14px;
      }

      &__description {
        font-size: 14px;
      }

      &__picture {
        width: 70%;
        margin-top: 56px;
      }
    }
  }

  @media (max-width: 950px) {
    &__article {
      &__column {
        margin: 0;
      }

      &__title {
        flex-direction: column;
        align-items: baseline;
      }
    }
  }

  @media (max-width: 722px) {
    .footer {
      width: 100%;
      padding: 0 70px;
    }
  }

  @media (max-width: 460px) {
    &__title {
      margin-top: auto;
      padding: 0 20px;
    }

    &__article {
      &__column {
        width: 80%;
      }

      &__title {
        h3 {
          margin-bottom: 0;
        }
      }

      &__picture {
        width: 80%;
        margin-top: 30px;
      }
    }
  }
}
.footer {
  border-top: 1px solid black;
}
</style>

<template lang="">
  <main>
    <Header />
    <div class="articles" id="articles">
      <h1 class="title">Our news</h1>
      <section class="news">
        <article v-for="article in this.artclesArr" class="news-item">
          <h3 class="news-item__title">{{ article.attributes.title }}</h3>
          <p
            v-html="article.attributes.description"
            class="news-item__description"
          ></p>
          <img
            :src="api + article.attributes.picture.data[0].attributes.url"
            alt="news-pic"
            class="news-item__picture"
          />
        </article>
      </section>
    </div>
    <Footer />
  </main>
</template>
<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer.vue";
import API from "~/apies/backend";

export default {
  components: {
    Header,
    Footer,
    API,
  },

  data() {
    return {
      title: "Articles",
      artclesArr: [],
      api: "",
    };
  },

  mounted() {
    const bodyOfSite = document.querySelector("body");
    const footerOfSite = document.querySelector("footer");

    bodyOfSite.style.overflowX = "hidden";
    bodyOfSite.style.overflowY = "auto";
    bodyOfSite.style.width = "100vw";
    bodyOfSite.style.maxWidth = "1200px";
    bodyOfSite.style.marginLeft = "auto";
    bodyOfSite.style.marginRight = "auto";

    footerOfSite.style.width = "90vw";
    footerOfSite.style.display = "flex";
    footerOfSite.style.alignItems = "center";
    footerOfSite.style.justifyContent = "space-between";
    footerOfSite.style.padding = "20px 80px";
    footerOfSite.style.width = "90vw";
    footerOfSite.style.width = "90vw";

    this.$axios(`/api/articles/?populate=*`).then((response) => {
      this.artclesArr = response.data.data.reverse();
    });

    this.api = API;
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
};
</script>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  * {
    font-family: system-ui;
  }

  .title {
    position: absolute;
    top: 20px;
  }

  .news {
    max-width: 1000px;

    &-item {
      width: 100%;

      &__title {
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 30px !important;
      }

      &__description {
        font-size: 16px;
        margin-bottom: 40px;
        text-align: justify;
      }

      &__picture {
        width: 100%;
        // height: 500px;
        object-fit: cover;
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: 1050px) {
    padding: 0 30px;
  }

  @media (max-width: 800px) {
    .title {
      font-size: 24px;
      margin-top: 10px;
    }

    .news {
      &-item {
        &__title {
          font-size: 18px;
        }

        &__description {
          font-size: 14px;
        }

        // &__picture {
        //   height: 300px;
        // }
      }
    }
  }

  @media (max-width: 430px) {
    .news-item__description {
      text-align: start;
    }
  }
}
.footer {
  border-top: 1px solid black;
  width: 100vw !important;
}
</style>

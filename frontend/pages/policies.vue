<template lang="">
  <main>
    <Header />
    <div class="policies">
      <h1 class="policies__title">{{ this.title }}</h1>
      <p v-html="this.content" class="policies__content"></p>
      <img
        :src="this.api + this.pictureUrl"
        alt="treatment-pic"
        class="policies__picture"
      />
    </div>
    <Footer />
  </main>
</template>
<script>
import API from "~/apies/backend";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    API,
    Header,
    Footer,
  },

  data() {
    return {
      title: "",
      content: "",
      pictureUrl: "",
      api: "",
    };
  },

  head() {
    return {
      title: "Policy",
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

  mounted() {
    const bodyOfSite = document.querySelector("body");
    bodyOfSite.style.overflowY = "auto";
    bodyOfSite.style.overflowX = "hidden";

    this.$axios(`/api/policies/?populate=*`).then((response) => {
      this.title = response.data.data[0].attributes.title;
      this.content = response.data.data[0].attributes.content;
      this.pictureUrl =
        response.data.data[0].attributes.picture.data[0].attributes.url;
    });

    this.api = API;
  },
};
</script>

<style lang="scss" scoped>
.policies {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &__title {
    text-align: center;
  }

  &__content {
    margin: 30px 0;
    font-size: 22px;
    padding: 0 30px;

    blockquote {
      margin-left: 50px !important;
    }

    @media (max-width: 900px) {
      font-size: 14px;
    }
  }

  &__picture {
    height: 500px;
    object-fit: cover;
    padding: 0 30px;

    @media (max-width: 700px) {
      height: 300px;
    }
  }

  .footer {
    border-top: 1px solid black;
  }
}

@media (max-width: 1200px) {
  .footer {
    padding-left: 30px;
    padding-right: 30px;
  }
}

.footer {
  border-top: 1px solid black;
  margin-top: 40px;
}
</style>

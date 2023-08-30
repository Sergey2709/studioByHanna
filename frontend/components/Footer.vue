<template>
  <footer class="footer">
    <nav class="footer-nav">
      <ul>
        <nuxt-link
          :to="{
            path: '/',
            hash: '',
          }"
          ><li>Home</li></nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#services' }"
          ><li>Services</li></nuxt-link
        >
        <nuxt-link :to="{ path: '/', hash: '#about' }"
          ><li>About</li></nuxt-link
        >
        <nuxt-link :to="{ path: '/articles', hash: '' }"
          ><li>News</li></nuxt-link
        >
        <nuxt-link :to="{ path: '/policies', hash: '' }"
          ><li>Our Policy</li></nuxt-link
        >
      </ul>
    </nav>
    <img class="footer-logo" src="../static/logo2.svg" alt="logo" />
    <div class="footer-contacts">
      <p>Contact:</p>
      <ul>
        <li><a href="tel:+18434995444">+1 (843) 499-5444</a></li>
        <li>
          <a href="mailto:shugar.likarann@gmail.com"
            >shugar.likarann@gmail.com</a
          >
        </li>
        <li>
          <a href="https://goo.gl/maps/ZwdqhcZ2bzpv4Ync9"
            >1501 N Highway 17, Unit J, Suite 106,<br />
            Mount Pleasant, SC 29464
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles.scss";
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  width: 100vw;
  max-width: 1600px;

  &-logo {
    position: relative;
    width: 300px;
    z-index: -1 !important;
  }

  &-nav {
    width: 20%;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      font-size: 24px;

      a {
        color: $color_of_text;
        text-decoration: none;

        font-weight: bold;

        li {
          margin-right: 20px;
          font-size: 24px;
          line-height: 30px !important;

          &:hover {
            color: $color_of_text_hover;
            font-size: 26px;
          }
        }
      }
    }
  }

  &-contacts {
    width: 20%;
    text-align: end;

    p {
      margin: 0;
      font-size: 24px;
      margin-bottom: 29px;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 6px;
      font-size: 14px;
      line-height: 20px !important;

      a {
        color: $color_of_text;
        text-decoration: none;

        &:hover {
          color: $color_of_text_hover;
          font-size: 14.5px;
        }
      }
    }
  }

  @media (max-width: 1310px) {
    &-nav,
    &-contacts {
      width: 33%;
    }
  }

  @media (max-width: 920px) {
    &-logo {
      width: 150px;
    }

    &-nav,
    &-contacts {
      width: 35%;
    }

    &-nav > ul > a > li {
      font-size: 18px;
    }

    &-contacts {
      p {
        font-size: 18px;
      }
      ul > li > a {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 722px) {
    padding: 20px;

    &-logo {
      display: none;
    }

    &-contacts {
      width: 67%;
    }
  }
}
</style>

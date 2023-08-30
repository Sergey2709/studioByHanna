<template>
  <section class="about-us"  id="about">
    <h3 class="about-us__title">About Us</h3>
    <article class="about-us__description">
      My path to "Beauty Studio by Hanna" started with a childhood dream. After
      graduating from medical school in Ukraine and giving birth to my first
      child I decided it was about time to bring this dream to life. I took a
      course in epilation and sugaring, which I then practiced for 2 years. This
      became my gateway to establishing myself as a professional esthetician.
      After moving to the US, I simultaneously built my own business while
      obtaining my esthetician's license from Charleston Cosmetology
      Institute.<br /><br />
      My medical education coupled with the training I underwent to become a
      licensed esthetician helped me develop my own technique to create the
      Signature European Facial that my clients experience today. What makes my
      facials so different is the sculpting lymphatic drainage massage that
      works with not just skin but with deeper muscular tissues. This aids in
      anti-aging, fighting acne, improving skin tone, reducing
      swelling/puffiness, and the stimulation of collagen and blood flow;
      regular sessions help lift the skin and slow the natural process of aging.
      This European approach to the reduction of pain and improvement of skin
      tone transfers to my sugaring services too. My mission is to continue
      bringing quality European skincare treatments and techniques to my
      clients. With the pursuit of my passion, I hope to make my family proud.
    </article>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/styles.scss";
.about-us {
  margin: 0 auto;
  padding: 50px;
  width: 100%;
  height: 100vh;
  min-height: 620px;
  max-height: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 36px;
    color: $color_of_text;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  &__description {
    max-width: 900px;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: $color_of_text;
  }

  @media (max-width: 770px) {
    padding: 20px;
    height: auto;

    &__title {
      font-size: 24px;
      margin: 30px;
    }
  }
}
</style>

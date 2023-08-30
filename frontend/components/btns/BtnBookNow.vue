<template lang="">
  <a
    class="btn-book"
    href="https://squareup.com/appointments/book/LQKR9PZGT1ZMB"
    >Book now</a
  >
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/scss/styles.scss";

.btn-book {
  display: flex;
  justify-content: center;
  text-decoration: none;
  -webkit-text-decoration: none;
  border-radius: 15px;
  padding: 10px 25px;
  display: flex;
  justify-items: center;
  align-items: center;
  background: $bg_of_btn_book;
  color: $color_of_text_btn;
  text-transform: uppercase;
  width: 150px;

  &:hover {
    transform: translateY(-3px);
  }
}
</style>

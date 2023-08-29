<template>
  <section class="values">
    <hr />
    <p>"Beauty Studio by Hanna: Loving the Skin You're Born In"</p>
    <hr />
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss">
.values {
  height: 300px;
  width: 100vw;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #7d9c9c;
  font-size: 40px;

  color: #fff8dc;
  display: flex;
  justify-content: center;
  text-align: center;
  font-style: italic;

  @media (max-width: 840px) {
    font-size: 26px;
  }

  @media (max-width: 550px) {
    font-size: 18px;
    height: 230px;
  }

  @media (min-width: 1600px) {
    max-width: 1600px;
  }

  p {
    padding: 0 20px;
  }

  hr {
    width: 15%;
    height: 1px;
  }
}
</style>

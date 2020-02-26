<template lang="html">

  <div class="heroImage">
    <div class="hero-text">
      <h1>死にたい</h1>
      <p class="display-4">Descubre el mañana</p>
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'heroImage',
    data() {
      return {
      }
    },
    props: {
    },
    methods: {
  }
}
</script>

<style>
.heroImage {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/hero.jpeg");
  height: 50vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

</style>

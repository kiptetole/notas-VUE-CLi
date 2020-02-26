<template lang="html">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
          <img src="../assets/juegos1.jpeg" class="d-block w-100" alt="juegos 1">
      </div>
      <div class="carousel-item">
        <img src="../assets/juegos2.jpeg" class="d-block w-100" alt="juegos 2">
      </div>
      <div class="carousel-item">
        <img src="../assets/juegos3.jpeg" class="d-block w-100" alt="juegos 3">
      </div>
      <div class="carousel-item">
        <img src="../assets/juegos4.jpeg" class="d-block w-100" alt="juegos 4">
      </div>
      <div class="carousel-item">
        <img src="../assets/juegos5.jpeg" class="d-block w-100" alt="juegos 5">
      </div>
      <div class="carousel-item">
        <img src="../assets/juegos6.jpeg" class="d-block w-100" alt="juegos 6">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
  </div>
</template>



<script lang="js">

  export default  {
    name: 'carousel',
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

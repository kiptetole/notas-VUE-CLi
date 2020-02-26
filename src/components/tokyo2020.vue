<template lang="html">

  <div class="tokio2020">
    <heroImage></heroImage>
    <contenido></contenido>
    <carousel></carousel>
  </div>
</template>

<script lang="js">
import heroImage from './heroImage.vue'
import contenido from './contenido.vue'
import carousel from './carousel.vue'

  export default  {
    name: 'tokio2020',
    data() {
      return {
      }
    },
    props: {
    },
    methods: {
    },
    components: {
    heroImage,
    contenido,
    carousel, 
    }

}
</script>

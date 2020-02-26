<template lang="html">

  <div class="conatiner-fluid">
    <div class="row">
      <div class="col-1">
        
      </div>
      <div class="col-10 d-flex justify-content-start">
        <p class="d-inline display-4 ">{{msg}}</p>
      </div>
      <div class="col-1">
        
      </div>
    </div>
    <div class="row">
      <div class="col-3 d-flex justify-content-start">
        <p class="d-inline">{{prioridad}}</p>
      </div>
      <div class="col-5 d-flex justify-content-start">
        <p class="d-inline">{{fecha}}</p>
      </div>
    </div>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'detalle-socio',
    props: ['msg', 'fecha', 'prioridad'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {

    }
}


</script>

<style>
.info {
  display: inline;
}
</style>
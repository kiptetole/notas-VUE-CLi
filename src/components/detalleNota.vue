<template lang="html">

  <div class="conatiner-fluid">
    <div class="row">
      <div class="col-1">
        <img class="completo" v-if="hecho == true" src="../assets/check2.png" @click="hacer">
        <img class="incomp" v-else src="../assets/check1.png" @click="hacer">
      </div>
      <div class="col-10 d-flex justify-content-start" v-bind:class="{checked: hecho}">
        <p class="d-inline display-4 ">{{msg}}</p>
      </div>
      <div class="col-1">
        <img class="borrar" src="../assets/borrar.png" @click="borrar">
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
    props: ['msg', 'fecha', 'prioridad', 'hecho'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      hacer: function () {
        this.$emit("hecho", !(this.hecho), this.fecha)
      },
      borrar: function() {
        this.$emit("borrar", this.fecha)
      }
    },
    computed: {

    }
}


</script>

<style>
.info {
  display: inline;
}

.checked {
    color: #28a745;
    text-decoration: line-through;
}

img{
  height: 3rem;
  width: 3rem;
}
</style>